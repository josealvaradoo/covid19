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
import RegionsService from './../../services/RegionsService'
import CasesService from './../../services/CasesService'
import Spinner from '../../components/helpers/spinner';
import { setError } from '../../redux/ducks/notification';

const GenderDistribution = ({handleNotification}) => {
	const [total, setTotalCases] = useState(0)
	const [genders, setGendersDistribution] = useState([])
	const [pageLoaded, setPageLoadedState] = useState(false)

	useEffect(() => {
		(async () => {
			if (!pageLoaded) {
				let _total = 0
				const _regions = await RegionsService.fetchData()
				const _genders = await CasesService.getByGender()

				_regions.map(region => 	_total += Number(region.cases))

				setGendersDistribution(_genders, 'order')
				setTotalCases(_total)
				setPageLoadedState(true)
			}
		})()
	}, [pageLoaded])

	const submit = async (event) => {
		event.preventDefault()
		
		let _total = 0
		const data = []
		const submitGenders = [
			event.target.men.value,
			event.target.si.value,
			event.target.women.value
		]

		genders.map((gender, index) => {
			data.push({
				id: gender.id,
				cases: Number(submitGenders[index])
			})

			_total += Number(submitGenders[index])
			return true
		})

		if (_total !== total) {
			handleNotification({
				code: "states/ages-incomplete",
				message: "La sumatoria de edades no coinciden con el total"
			})
			return false
		}

		await CasesService.updateGenders(data)
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
							<Label htmlFor="men">Hombres</Label>
							<Input type="number" name="men" border defaultValue={genders[1].cases} />
						</FormGroup>
						<FormGroup>
							<Label htmlFor="women">Mujeres</Label>
							<Input type="number" name="women" border defaultValue={genders[0].cases} />
						</FormGroup>
						<FormGroup>
							<Label htmlFor="si">Sin Información</Label>
							<Input type="number" name="si" border defaultValue={genders[2].cases} />
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

GenderDistribution.defaultProps = {}

GenderDistribution.propTypes = {}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	handleNotification(data) {
		dispatch(setError(data))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(GenderDistribution)