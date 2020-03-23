import Firebase from "firebase";
import store from './../redux/store'
import {events} from './../redux/ducks/notification'
import {setUserData, removeUserData} from './../redux/ducks/user'

export default class AuthenticationService {
	static async signIn(email, password) {
		try {
			const data = await Firebase.auth().signInWithEmailAndPassword(email, password);

			if(data.user) {
				store.dispatch(setUserData(data.user))
			}

			return data.user
		} catch(error) {
			store.dispatch(events.setError({
				code: error.code,
				message: error.message
			}))
		}
	}

	static async signOut() {
		try {
			Firebase.auth().signOut()
			store.dispatch(removeUserData());
			return true
		} catch(error) {
			console.log(error)
		}
	}
}
