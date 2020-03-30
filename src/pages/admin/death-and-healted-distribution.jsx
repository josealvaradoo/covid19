import React, { useState, useEffect } from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import Button from '../../components/buttons/button'
import Form from '../../components/forms/form'
import FormGroup from '../../components/forms/form-group'
import Label from '../../components/inputs/label'
import Input from '../../components/inputs/input'
import PropTypes from 'prop-types'
import EDContainer from '../../components/grid/ed-container'
import EDitem from '../../components/grid/ed-item'
import Typography from '../../components/typography/typography'
import DashboardHeader from '../../components/header/dashboard-header'
import Avatar from '../../components/user/avatar'
import {today} from './../../helpers/date'
import CasesService from '../../services/CasesService'
import { setError } from '../../redux/ducks/notification';

const DeathAndHealted = ({handleNotification}) => {
	const [date, setDate] = useState(today())
	const [pageLoaded, setPageLoadedState] = useState(false)

	useEffect(() => {
		(async function () {
			if (!pageLoaded) {
				setDate(today())
				setPageLoadedState(true)
			}
		})()
	}, [pageLoaded]) // eslint-disable-line

	const submit = async (event) => {
		event.persist()
		event.preventDefault()
		const data = {
			date: `${event.target.date.value}T${moment().format('LTS')}`,
			death: Number(event.target.death.value),
			healted: Number(event.target.healted.value)
		}

		if (data.death === 0 && data.healted === 0) {
			handleNotification({
				code: "cases/fields-required",
				message: "Al menos uno de los campos debe estar lleno"
			})
			return false
		}

		await CasesService.createStatusCases(data)

		event.target.death.value = 0
		event.target.healted.value = 0
	}

	return (
		<>
		<DashboardHeader />
		<EDContainer className="height--60 scroll--auto">
			<EDitem m={40} className="m-to-center m-t-1">
				<Form onSubmit={submit}>
					<FormGroup>
						<Label htmlFor="date">Fecha</Label>
							<Input type="date" name="date" border defaultValue={date} />
					</FormGroup>
					<FormGroup>
						<Label htmlFor="death">Muertes confirmadas</Label>
						<Input type="number" name="death" border defaultValue={0} />
					</FormGroup>
					<FormGroup>
						<Label htmlFor="healted">Recuperados confirmados</Label>
						<Input type="number" name="healted" border defaultValue={0} />
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

DeathAndHealted.defaultProps = {
	handleNotification: () => {}
}

DeathAndHealted.propTypes = {
	handleNotification: PropTypes.func
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	handleNotification(data) {
		dispatch(setError(data))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(DeathAndHealted)