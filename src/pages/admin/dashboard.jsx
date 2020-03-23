import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import Button from '../../components/buttons/button';
import Form from '../../components/forms/form';
import FormGroup from '../../components/forms/form-group';
import Label from '../../components/inputs/label';
import Input from '../../components/inputs/input';
import Select from '../../components/inputs/select';
import CasesService from './../../services/CasesService'
import RegionsService from './../../services/RegionsService'
import PropTypes from 'prop-types'
import {orderBy} from './../../helpers/array'
import { loadRegions } from '../../redux/ducks/regions';
import EDContainer from '../../components/grid/ed-container';
import EDitem from '../../components/grid/ed-item';

const Dashboard = ({setRegionsToReduxStore, regionsState}) => {
	const [regions, fetchRegionsData] = useState([])
	const [pageLoaded, setPageLoadedState] = useState(false)
	const [caseSelected, setlectCase] = useState(null)

	useEffect(() => {
		(async function() {
			await fetchRegions()
		})()
	}, []) // eslint-disable-line

	const fetchRegions = async () => {
		if(regionsState.length === 0) {
			const result = []
			const data = await RegionsService.fetchData()
			
			orderBy(data, 'name').map(item => result.push({value: item.id, label: item.name}))

			fetchRegionsData(result)
			setRegionsToReduxStore(result)
		} else {
			fetchRegionsData(regionsState)
		}

		setPageLoadedState(true)
	}

	const selectRegionCase = async (event) => {
		const regionId = event.target.value
		const _case = await CasesService.getByRegionId(regionId)
		
		if(!_case) {
			const region = await RegionsService.getById(regionId)
			return setlectCase(await CasesService.create({death: 0, healted: 0, cases: 0, state_id: regionId, state: region.name}))
		}

		setlectCase(_case)
	}
	
	const submit = async (event) => {
		event.preventDefault()
		const data = {
			...caseSelected,
			cases: event.target.cases.value,
			death: event.target.death.value,
			healted: event.target.healted.value
		}

		CasesService.update(caseSelected.id, data)
		setlectCase(null)
		return false
	}

	return (
		<EDContainer>
			<EDitem m={40} className="m-to-center">
			{
				pageLoaded && (
					<Form onSubmit={submit}>
						{
							regions.length > 0 && (
								<FormGroup>
									<Label htmlFor="regions">Region</Label>
									<Select name="regions" border placeholder="Selecciona una region" options={regions} onChange={selectRegionCase} />
								</FormGroup>
							)
						}
						{
							caseSelected && (
								<>
								<FormGroup>
									<Label htmlFor="cases">Casos confirmados</Label>
									<Input type="number" name="cases" border defaultValue={Number(caseSelected.cases)} />
								</FormGroup>
								<FormGroup>
									<Label htmlFor="death">Muertes confirmadas</Label>
									<Input type="number" name="death" border defaultValue={Number(caseSelected.death)} />
								</FormGroup>
								<FormGroup>
									<Label htmlFor="healted">Recuperados confirmados</Label>
									<Input type="number" name="healted" border defaultValue={Number(caseSelected.healted)} />
								</FormGroup>
								<FormGroup>
									<Button type="submit" color="primary" full>Actualizar {caseSelected.state}</Button>
								</FormGroup>
								</>
							)
						}
					</Form>
				)
			}
			</EDitem>
		</EDContainer>
	)
}

Dashboard.defaultProps = {
	regions: []
}

Dashboard.propTypes = {
	regions: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = state => ({
	regionsState: state.regions
})

const mapDispatchToProps = dispatch => ({
	setRegionsToReduxStore(regions) {
		dispatch(loadRegions(regions))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)