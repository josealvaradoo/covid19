import { createDuck } from "redux-duck";

const duck = createDuck("regions");

const initialState = localStorage.getItem('regions') ? JSON.parse(localStorage.getItem('regions')) : [];

const LOAD_REGIONS = duck.defineType("LOAD_REGIONS");

export const loadRegions = duck.createAction(LOAD_REGIONS);

export default duck.createReducer(
	{
		[LOAD_REGIONS]: (state, { payload }) => {
			localStorage.setItem('regions', JSON.stringify(payload))
			return payload
		}
	},
	initialState
);
