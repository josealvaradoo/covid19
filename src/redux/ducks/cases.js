import { createDuck } from 'redux-duck'
import Immutable from 'immutable'

const duck = createDuck('cases')

const initialState = {
	list: Immutable.List(),
	data: Immutable.Map()
}

const LOAD_CASES = duck.defineType('LOAD_CASES')
const ADD_CASE = duck.defineType('ADD_CASE')
const REMOVE_CASE = duck.defineType('REMOVE_CASE')

export const loadCases = duck.createAction(LOAD_CASES)
export const addCase = duck.createAction(ADD_CASE)
export const removeCase = duck.createAction(REMOVE_CASE)

export default duck.createReducer({
	[LOAD_CASES]: (state, {payload}) => ({
		list: payload,
		data: state.data.set(payload)
	}),
	[ADD_CASE]: (state, {payload}) => ({
		list: state.list.push(payload),
		data: state.data.set(payload)
	}),
	[REMOVE_CASE]: (state, {payload}) => ({
		list: state.list.filterNot(id => id === payload.id),
		data: state.data
	})
}, initialState)