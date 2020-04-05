import React from 'react'
import ReactDOM from 'react-dom'
import Firebase from 'firebase'
import moment from 'moment'
import 'moment/locale/es'
import { Provider } from "react-redux";
import 'ed-grid'
import './assets/scss/styles.scss'
import App from './App'
import store from './redux/store'
import config from './config/env.config'
import * as serviceWorker from './serviceWorker'

// Config Firebase
window.firebaseApp = Firebase.initializeApp(config.firebaseConfig)
window.firebaseDB = Firebase.firestore(window.firebaseApp)

// Config Moment.js
moment.locale('es')

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
	onUpdate: registration => {
		registration.unregister().then(() => {
			window.location.reload()
		})
	},
})
