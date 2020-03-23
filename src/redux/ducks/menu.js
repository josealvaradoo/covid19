import { createDuck } from "redux-duck";

const duck = createDuck("menu");

const initialState = false

const TOGGLE_MENU = duck.defineType("TOGGLE_MENU");

export const toggleMenu = duck.createAction(TOGGLE_MENU);

export default duck.createReducer(
	{
		[TOGGLE_MENU]: (state, { payload }) => !state
	},
	initialState
);
