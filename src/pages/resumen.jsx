import React, { useEffect, useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import DetailHeader from './../components/header/detail-header'
import EDContainer from '../components/grid/ed-container'
import EDitem from '../components/grid/ed-item'
import Typography from '../components/typography/typography'
import EDGrid from '../components/grid/ed-grid'
import EDcolumn from '../components/grid/ed-column'
import Divider from '../components/helpers/divider'

const Resumen = ({user}) => {
	return (
		<>
			<DetailHeader image="https://i1.wp.com/mejoreszonas.com/wp-content/uploads/2018/11/Mejores-zonas-donde-alojarse-en-Caracas-Venezuela.jpg?resize=1100,540">
			Venezuela
		</DetailHeader>
		<EDContainer>
			<EDitem sMain="center">
				<Typography align="center" variant="subtitle" className="m-b-1">Resumen</Typography>
			</EDitem>
			<EDitem>
				<EDGrid s={3}>
					<EDcolumn>
						<EDitem sMain="center">
							<Typography align="center" variant="figure">109</Typography>
							<Typography align="center" variant="description">Casos</Typography>
						</EDitem>
					</EDcolumn>
					<EDcolumn>
						<EDitem sMain="center">
							<Typography align="center" variant="figure">1</Typography>
							<Typography align="center" variant="description">Fallecidos</Typography>
						</EDitem>
					</EDcolumn>
					<EDcolumn>
						<EDitem sMain="center">
							<Typography align="center" variant="figure">1</Typography>
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
				<EDGrid s={2}>
					<EDcolumn>
						<EDitem sMain="center">
							<Typography align="center" variant="figure">56%</Typography>
							<Typography align="center" variant="description">Hombres</Typography>
						</EDitem>
					</EDcolumn>
					<EDcolumn>
						<EDitem sMain="center">
							<Typography align="center" variant="figure">44%</Typography>
							<Typography align="center" variant="description">Mujeres</Typography>
						</EDitem>
					</EDcolumn>
				</EDGrid>
			</EDitem>

			<EDitem>
				<Divider margin={2} spacing={1} />
			</EDitem>

			<EDitem sMain="center">
				<Typography align="center" variant="subtitle" className="m-b-1">Distribución por edad</Typography>
			</EDitem>
			<EDitem>
				<EDGrid s={4}>
					<EDcolumn>
						<EDitem sMain="center">
							<Typography align="center" variant="figure">4</Typography>
							<Typography align="center" variant="description">0-20</Typography>
						</EDitem>
					</EDcolumn>
					<EDcolumn>
						<EDitem sMain="center">
							<Typography align="center" variant="figure">27</Typography>
							<Typography align="center" variant="description">21-40</Typography>
						</EDitem>
					</EDcolumn>
					<EDcolumn>
						<EDitem sMain="center">
							<Typography align="center" variant="figure">52</Typography>
							<Typography align="center" variant="description">41-60</Typography>
						</EDitem>
					</EDcolumn>
					<EDcolumn>
						<EDitem sMain="center">
							<Typography align="center" variant="figure">26</Typography>
							<Typography align="center" variant="description">+60</Typography>
						</EDitem>
					</EDcolumn>
				</EDGrid>
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
							<Typography align="center" variant="figure">1%</Typography>
							<Typography align="center" variant="description">Fallecidos</Typography>
						</EDitem>
					</EDcolumn>
					<EDcolumn>
						<EDitem sMain="center">
							<Typography align="center" variant="figure">1%</Typography>
							<Typography align="center" variant="description">Sanados</Typography>
						</EDitem>
					</EDcolumn>
				</EDGrid>
			</EDitem>
		</EDContainer>
		</>
	)
}

Resumen.defaultProps = {
	user: null
}

Resumen.propTypes = {
	user: PropTypes.any
}

const mapStateToProps = state => ({
	user: state.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Resumen)