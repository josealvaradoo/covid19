import { createDuck } from "redux-duck";
import store from './../store'

const duck = createDuck("application");

const initialState = {
	viewport: {
		width: window.innerWidth,
		height: window.innerHeight,
		virtualKeyboardIsOpen: false
	},
	keyboardOnFocus: false
}

const SET_VIEWPORT_APPLICATION = duck.defineType("SET_VIEWPORT_APPLICATION");
const SET_ONFOCUS_KEYBOARD_APPLICATION = duck.defineType("SET_ONFOCUS_KEYBOARD_APPLICATION");

export const setViewportDimentions = duck.createAction(SET_VIEWPORT_APPLICATION);
export const setOnFocusKeyboard = duck.createAction(SET_ONFOCUS_KEYBOARD_APPLICATION);

export default duck.createReducer(
	{
		[SET_VIEWPORT_APPLICATION]: (state, { payload }) => ({
			...state,
			viewport: payload
		}),
		[SET_ONFOCUS_KEYBOARD_APPLICATION]: (state, { payload }) => ({
			...state,
			keyboardOnFocus: payload
		})
	},
	initialState
);
