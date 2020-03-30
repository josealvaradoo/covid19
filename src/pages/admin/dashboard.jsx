import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
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
import Typography from '../../components/typography/typography';
import DashboardHeader from '../../components/header/dashboard-header';
import Avatar from '../../components/user/avatar';
import {today} from './../../helpers/date' 

const Dashboard = ({setRegionsToReduxStore, regionsState}) => {
	const [date, setDate] = useState(today())
	const [regions, fetchRegionsData] = useState([])
	const [pageLoaded, setPageLoadedState] = useState(false)
	const [regionSelected, selectRegion] = useState(null)

	useEffect(() => {
		(async function() {
			setDate(today())
			if(!pageLoaded) await fetchRegions()
		})()
	}, []) // eslint-disable-line

	const fetchRegions = async () => {
		const result = []

		if(regionsState.length === 0) {
			const data = await RegionsService.fetchData()
			orderBy(data, 'name').map(item => result.push({value: item.id, label: item.name}))

			fetchRegionsData(result)
			setRegionsToReduxStore(result)
		} else {
			orderBy(regionsState, 'name').map(item => result.push({ value: item.id, label: item.name }))
			fetchRegionsData(result)
		}

		setPageLoadedState(true)
	}

	const handleRegionSelector = async (event) => {
		const regionId = event.target.value
		selectRegion(await RegionsService.getById(regionId))
	}
	
	const submit = async (event) => {
		event.persist()
		event.preventDefault()
		const data = {
			state_id: regionSelected.id,
			date: `${event.target.date.value}T${moment().format('LTS')}`,
			cases: Number(event.target.cases.value),
		}

		// Update region cases
		await RegionsService.update(regionSelected.id, {cases: Number(regionSelected.cases + data.cases)})

		// Add new case
		await CasesService.create(data)
		
		// Reset all form fields
		selectRegion(null)
		event.target.regions.value = ""
		event.target.cases.value = 0

		return false
	}

	return (
		<>
		<DashboardHeader />
		<EDContainer className="height--60 scroll--auto">
			<EDitem m={40} className="m-to-center m-t-1">
				<Form onSubmit={submit}>
					<FormGroup>
						<Label htmlFor="regions">Region</Label>
						<Select name="regions" border placeholder="Selecciona una region" options={regions} onChange={handleRegionSelector} />
					</FormGroup>
					<FormGroup>
						<Label htmlFor="date">Fecha</Label>
							<Input type="date" name="date" border defaultValue={date} required />
					</FormGroup>
					<FormGroup>
						<Label htmlFor="cases">Casos confirmados</Label>
						<Input type="number" disabled={!regionSelected} name="cases" border defaultValue={0} min={1} required />
					</FormGroup>
					<FormGroup>
						<Button type="submit" color="primary" full>Agregar</Button>
					</FormGroup>
				</Form>
			</EDitem>
		</EDContainer>
		</>
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