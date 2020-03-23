import { createDuck } from "redux-duck";

const duck = createDuck("notification");

const initialState = {
	type: null,
	code: null,
	message: null
};

const SET_NOTIFICATION = duck.defineType("SET_NOTIFICATION");
const SET_NOTIFICATION_CASE = duck.defineType("SET_NOTIFICATION_CASE");
const SET_NOTIFICATION_AS_ERROR = duck.defineType("SET_NOTIFICATION_AS_ERROR");
const CLEAR_NOTIFICATION = duck.defineType("CLEAR_NOTIFICATION");

export const setError = duck.createAction(SET_NOTIFICATION_AS_ERROR);
export const showCaseDetails = duck.createAction(SET_NOTIFICATION_CASE);
export const setNotification = duck.createAction(SET_NOTIFICATION);
export const clearNotification = duck.createAction(CLEAR_NOTIFICATION);

export default duck.createReducer(
	{
		[SET_NOTIFICATION]: (state, { payload }) => {
			switch (payload.code) {
				case "cases/case-updated-successfully":
					return {
						type: "success",
						code: payload.code,
						message: payload.message
					};
				default:
					return state;
			}
		},
		[SET_NOTIFICATION_AS_ERROR]: (state, { payload }) => {
			switch (payload.code) {
				case "auth/user-not-found":
					return {
						type: "error",
						code: payload.code,
						message: "El usuario no existe"
					};
				case "auth/wrong-password": {
					return {
						type: "error",
						code: payload.code,
						message: "Contraseña inválida"
					};
				}
				case "states/state-not-found": {
					return {
						type: "error",
						code: payload.code,
						message: payload.message
					};
				}
				default:
					return state;
			}
		},
		[SET_NOTIFICATION_CASE]: (state, { payload }) => {
			switch (payload.code) {
				case "cases/case-detail":
					return {
						type: "modal",
						code: payload.code,
						message: null,
						data: payload.data
					};
				default:
					return state;
			}
		},
		[CLEAR_NOTIFICATION]: (state, { payload }) => initialState
	},
	initialState
);

export const events = {
	setError,
	setNotification,
	clearNotification
}