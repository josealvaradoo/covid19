import {createStore, combineReducers} from 'redux'
import user from './ducks/user'
import menu from './ducks/menu'
import notification from './ducks/notification'
import cases from './ducks/cases'
import regions from './ducks/regions'
import application from './ducks/applicaton'


export default createStore(combineReducers({
	application,
	regions,
	cases,
	notification,
	menu,
	user
}))