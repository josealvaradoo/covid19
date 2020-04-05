import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import Button from '../../components/buttons/button';
import Form from '../../components/forms/form';
import FormGroup from '../../components/forms/form-group';
import Label from '../../components/inputs/label';
import Input from '../../components/inputs/input';
import EDContainer from '../../components/grid/ed-container';
import EDitem from '../../components/grid/ed-item';
import DashboardHeader from '../../components/header/dashboard-header';
import Spinner from '../../components/helpers/spinner';
import RegionsService from './../../services/RegionsService'
import CasesService from './../../services/CasesService'
import {orderBy} from './../../helpers/array'
import { setError } from '../../redux/ducks/notification';

const AgeDistribution = ({handleNotification}) => {
	const [total, setTotalCases] = useState(0)
	const [ages, setAgesDistribution] = useState([])
	const [pageLoaded, setPageLoadedState] = useState(false)

	useEffect(() => {
		(async () => {
			if (!pageLoaded) {
				let _total = 0
				const _regions = await RegionsService.fetchData()
				const _ages = await CasesService.getByAge()

				_regions.map(region => _total += Number(region.cases))

				setAgesDistribution(orderBy(_ages, 'order'))
				setTotalCases(_total)
				setPageLoadedState(true)
			}
		})()
	}, [pageLoaded])
	
	const submit = async (event) => {
		event.preventDefault()
		let _total = 0
		const data = []
		const submitAges = [
			event.target.age1.value,
			event.target.age2.value,
			event.target.age3.value,
			event.target.age4.value,
			event.target.age5.value
		]
		
		ages.map((age, index) => {
			data.push({
				id: age.id,
				cases: Number(submitAges[index])
			})

			_total += Number(submitAges[index])

			return true
		})

		if(_total !== total) {
			handleNotification({
				code: "states/ages-incomplete",
				message: "La sumatoria de edades no coinciden con el total"
			})
			return false
		}

		await CasesService.updateAges(data)
	}

	return (
		<>
		<DashboardHeader />
		<EDContainer className="height--60 scroll--auto">
			<EDitem m={40} className="m-to-center m-t-1">
				{
					pageLoaded
					? (
						<Form onSubmit={submit}>
							<FormGroup>
								<Label htmlFor="cases">Total de casos</Label>
								<Input type="number" name="cases" disabled border defaultValue={total} />
							</FormGroup>
							<FormGroup>
								<Label htmlFor="age1">Edad entre 0 y 20 años</Label>
								<Input type="number" name="age1" border defaultValue={ages[0].cases} />
							</FormGroup>
							<FormGroup>
								<Label htmlFor="age2">Edad entre 21 y 40 años</Label>
								<Input type="number" name="age2" border defaultValue={ages[1].cases} />
							</FormGroup>
							<FormGroup>
								<Label htmlFor="age3">Edad entre 41 y 60 años</Label>
								<Input type="number" name="age3" border defaultValue={ages[2].cases} />
							</FormGroup>
							<FormGroup>
								<Label htmlFor="age4">Edad mayor a 60 años</Label>
								<Input type="number" name="age4" border defaultValue={ages[3].cases} />
							</FormGroup>
							<FormGroup>
								<Label htmlFor="age5">Sin información</Label>
								<Input type="number" name="age5" border defaultValue={ages[4].cases} />
							</FormGroup>
							<FormGroup>
								<Button type="submit" color="primary" full>Actualizar</Button>
							</FormGroup>
						</Form>
					)
					: <Spinner className="m-t-3" />
				}
			</EDitem>
		</EDContainer>
		</>
	)
}

AgeDistribution.defaultProps = {}

AgeDistribution.propTypes = {}

const mapStateToProps = state => ({
	user: state.user
})

const mapDispatchToProps = dispatch => ({
	handleNotification(data) {
		dispatch(setError(data))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(AgeDistribution)