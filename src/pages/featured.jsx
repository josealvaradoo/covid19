import React, { useEffect, useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CasesService from '../services/CasesService';
import FloatButton from '../components/buttons/float-button';
import Icon from '../components/icons/icon';
import EDGrid from '../components/grid/ed-grid';
import EDcolumn from '../components/grid/ed-column';
import Caracas from '../components/map/states/caracas';

const FeaturedRegion = ({user}) => {
	return (
		<>
		<EDGrid m={2}>
			<EDcolumn>
					<svg id="venezuela_map" viewBox="0 0 1800 1500">
						<Caracas isActive={true} />
					</svg>
			</EDcolumn>
		</EDGrid>
		{user && <FloatButton type="circle" link to="/admin/dashboard"><Icon icon="plus" type="fas" /></FloatButton>}
		</>
	)
}

FeaturedRegion.defaultProps = {
	user: null
}

FeaturedRegion.propTypes = {
	user: PropTypes.any
}

const mapStateToProps = state => ({
	user: state.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedRegion)