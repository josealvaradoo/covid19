import React from 'react'
import {connect} from 'react-redux'
import Item, { ItemHeading, ItemContent } from '../items/item'
import { showCaseDetails } from '../../redux/ducks/notification'
import {orderBy} from './../../helpers/array'

const CasesList = ({cases, showCaseDetailsInModal}) => {
	const selectCaseToShow = (_case) => {
		showCaseDetailsInModal({
			code: "cases/case-detail",
			data: _case
		})
	}

	return (
		<div className="cases-list">
			{
				orderBy(cases, '!cases').map((_case, key) => _case.cases > 0 && (
					<Item key={key} onClick={() => selectCaseToShow(_case)}>
						<ItemHeading>{_case.state}</ItemHeading>
						<ItemContent>{_case.cases} {_case.cases > 1 ? 'casos' : 'caso'}</ItemContent>
					</Item>
				))
			}
		</div>
	)
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	showCaseDetailsInModal(payload) {
		dispatch(showCaseDetails(payload))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(CasesList)