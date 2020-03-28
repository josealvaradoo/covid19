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

const DetailRegion = ({user}) => {
	return (
		<>
		<DetailHeader>
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
				<Divider margin={2} spacing={2} />
			</EDitem>
			<EDitem sMain="center">
				<Typography align="center" variant="subtitle" className="m-b-1">Distribución de fallecidos y sanados</Typography>
			</EDitem>
			<EDitem>
				<EDGrid s={2}>
					<EDcolumn>
						<EDitem sMain="center">
							<Typography align="center" variant="figure">3%</Typography>
							<Typography align="center" variant="description">Fallecidos</Typography>
						</EDitem>
					</EDcolumn>
					<EDcolumn>
						<EDitem sMain="center">
							<Typography align="center" variant="figure">3%</Typography>
							<Typography align="center" variant="description">Sanados</Typography>
						</EDitem>
					</EDcolumn>
				</EDGrid>
			</EDitem>
		</EDContainer>
		</>
	)
}

DetailRegion.defaultProps = {
	user: null
}

DetailRegion.propTypes = {
	user: PropTypes.any
}

const mapStateToProps = state => ({
	user: state.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DetailRegion)