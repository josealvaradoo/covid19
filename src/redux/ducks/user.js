import { createDuck } from "redux-duck";

const duck = createDuck("user");

const initialState = JSON.parse(localStorage.getItem('user'))

const SET_USER = duck.defineType("SET_USER");
const REMOVE_USER = duck.defineType("REMOVE_USER");

export const setUserData = duck.createAction(SET_USER);
export const removeUserData = duck.createAction(REMOVE_USER);

export default duck.createReducer(
	{
		[SET_USER]: (state, { payload }) => {
			localStorage.setItem('user', JSON.stringify(payload));
			return payload;
		},
		[REMOVE_USER]: (state, { payload }) => {
			localStorage.clear()
			return null
		}
	},
	initialState
);
