import React, { useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'
import DetailHeader from './../components/header/detail-header'
import EDContainer from '../components/grid/ed-container'
import EDitem from '../components/grid/ed-item'
import Typography from '../components/typography/typography'
import EDGrid from '../components/grid/ed-grid'
import EDcolumn from '../components/grid/ed-column'
import Divider from '../components/helpers/divider'
import CasesService from '../services/CasesService'
import {orderBy} from './../helpers/array'
import Spinner from './../components/helpers/spinner'
import GoogleAnalytics from '../helpers/google-analytics'

const Resumen = ({regions}) => {
	const [genders, setGenders] = useState([])
	const [ages, setAges] = useState([])
	const [total, setTotal] = useState(0)
	const [totalDeath, setTotalDeath] = useState(0)
	const [totalHealted, setTotalHealted] = useState(0)
	const [pageLoaded, setPageLoadedState] = useState(false)
	
	useEffect(() => {
		(async function() {
			if(!pageLoaded) {
				let totalCases = 0
				let totalCasesDeath = 0
				let totalCasesHealted = 0
				const _ages = await CasesService.getByAge()
				const _status = await CasesService.getByStatus()
				const _genders = await CasesService.getByGender()

				regions.map(region => totalCases = Number(totalCases + region.cases))
				_status.map(row => {
					totalCasesDeath = Number(totalCasesDeath + row.death)
					totalCasesHealted = Number(totalCasesHealted + row.healted)
					return true
				})

				setTotal(Number(totalCases))
				setGenders(_genders)
				setAges(orderBy(_ages, "order"))
				setTotalDeath(totalCasesDeath)
				setTotalHealted(totalCasesHealted)
				setPageLoadedState(true)

				GoogleAnalytics.event('watch_resume', {
					event_category: 'User',
					event_label: 'User watches resume',
					event_action: 'watch_resume'
				})
			}
		})()
	}, [pageLoaded, regions])

	return (
		<>
		<Helmet>
			<title>Resumen - Coronavirus en Venezuela</title>
		</Helmet>
		<DetailHeader image="https://res.cloudinary.com/leetchi/image/upload/c_fill,f_auto,fl_lossy,g_center,h_520,q_80,w_715/v1539897994/1fd1f62b-aed6-4052-89ed-7cad52774419.jpg">
			Venezuela
		</DetailHeader>
		<EDContainer className="scroll--y height--70 p-b-1">
			{
				pageLoaded
				? (
					<>
					<EDitem sMain="center">
						<Typography align="center" variant="subtitle" className="m-b-1">Resumen</Typography>
					</EDitem>
					<EDitem>
						<EDGrid s={3}>
							<EDcolumn>
								<EDitem sMain="center">
									<Typography align="center" variant="figure">{total}</Typography>
									<Typography align="center" variant="description">Casos</Typography>
								</EDitem>
							</EDcolumn>
							<EDcolumn>
								<EDitem sMain="center">
									<Typography align="center" variant="figure">{pageLoaded ? totalDeath : 0}</Typography>
									<Typography align="center" variant="description">Fallecidos</Typography>
								</EDitem>
							</EDcolumn>
							<EDcolumn>
								<EDitem sMain="center">
									<Typography align="center" variant="figure">{pageLoaded ? totalHealted : 0}</Typography>
									<Typography align="center" variant="description">Sanados</Typography>
								</EDitem>
							</EDcolumn>
						</EDGrid>
					</EDitem>

					<EDitem>
						<Divider margin={2} spacing={1} />
					</EDitem>

					<EDitem sMain="center">
						<Typography align="center" variant="subtitle" className="m-b-1">Distribución de género</Typography>
					</EDitem>
					<EDitem>
						<EDContainer sMain="center">
							{
								pageLoaded && genders.map((gender, key) => (
									<EDitem key={key} s="1-3" sMain="center">
										<Typography align="center" variant="figure">{gender.cases}</Typography>
										<Typography align="center" variant="description">
											{gender.gender === "men" && "Hombres"}
											{gender.gender === "women" && "Mujeres"}
											{gender.gender === "S/I" && "S/I"}
										</Typography>
									</EDitem>
								))
							}
						</EDContainer>
					</EDitem>

					<EDitem>
						<Divider margin={2} spacing={1} />
					</EDitem>

					<EDitem sMain="center">
						<Typography align="center" variant="subtitle" className="m-b-1">Distribución por edad</Typography>
					</EDitem>
					<EDitem>
						<EDContainer sMain="center">
							{
								pageLoaded && ages.map((age, key) => (
									<EDitem key={key} s="1-3" sMain="center" className={` ${key < 3 && "m-b-1"} `}>
										<Typography align="center" variant="figure">{age.cases}</Typography>
										<Typography align="center" variant="description">
											{age.range}
										</Typography>
									</EDitem>
								))
							}
						</EDContainer>
					</EDitem>

					<EDitem>
						<Divider margin={2} spacing={1} />
					</EDitem>

					<EDitem sMain="center">
						<Typography align="center" variant="subtitle" className="m-b-1">Distribución de fallecidos y sanados</Typography>
					</EDitem>
					<EDitem>
						<EDGrid s={2}>
							<EDcolumn>
								<EDitem sMain="center">
									<Typography align="center" variant="figure">
										{pageLoaded ? Number(totalDeath / total * 100).toFixed(1) : 0}%
									</Typography>
									<Typography align="center" variant="description">Fallecidos</Typography>
								</EDitem>
							</EDcolumn>
							<EDcolumn>
								<EDitem sMain="center">
									<Typography align="center" variant="figure">
										{pageLoaded ? Number(totalHealted / total * 100).toFixed(1) : 0}%
									</Typography>
									<Typography align="center" variant="description">Sanados</Typography>
								</EDitem>
							</EDcolumn>
						</EDGrid>
					</EDitem>
					</>
				) : (
					<EDitem className="m-t-4">
						<Spinner />	
					</EDitem>
				)
			}
		</EDContainer>
		</>
	)
}

Resumen.defaultProps = {
	regions: []
}

Resumen.propTypes = {
	regions: PropTypes.array
}

const mapStateToProps = state => ({
	regions: state.regions
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Resumen)