import React, { useEffect, useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import DetailHeader from './../components/header/detail-header'
import EDContainer from '../components/grid/ed-container'
import EDitem from '../components/grid/ed-item'
import Typography from '../components/typography/typography'
import EDGrid from '../components/grid/ed-grid'
import EDcolumn from '../components/grid/ed-column'
import Spinner from './../components/helpers/spinner'

const DetailRegion = ({match, regions}) => {
	const [region, setRegion] = useState(null)

	useEffect(() => {
		const slug = match.params.region
		setRegion(regions.find(r => r.slug === slug))
	}, [region])

	return (
		<>
			<DetailHeader className="large" image={region ? region.image : "https://i1.wp.com/mejoreszonas.com/wp-content/uploads/2018/11/Mejores-zonas-donde-alojarse-en-Caracas-Venezuela.jpg?resize=1100,540"}>
			{region && region.name}
		</DetailHeader>
		<EDContainer>
			{
				region
				? (
					<>
					<EDitem sMain="center">
						<Typography align="center" variant="subtitle" className="m-b-4">Resumen</Typography>
					</EDitem>
					<EDitem>
						<EDGrid s={1}>
							<EDcolumn>
								<EDitem sMain="center">
									<Typography align="center" variant="figure--xl">{region.cases}</Typography>
									<Typography align="center" variant="description">Casos</Typography>
								</EDitem>
							</EDcolumn>
						</EDGrid>
					</EDitem>
					</>
				)
				: (
					<EDitem className="m-t-4">
						<Spinner />
					</EDitem>
				)
			}
		</EDContainer>
		</>
	)
}

DetailRegion.defaultProps = {
	user: null,
	regions: []
}

DetailRegion.propTypes = {
	user: PropTypes.any,
	regions: PropTypes.array
}

const mapStateToProps = state => ({
	user: state.user,
	regions: state.regions
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DetailRegion)