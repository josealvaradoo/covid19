import Firebase from "firebase";
import store from './../redux/store'
import {events} from './../redux/ducks/notification'
import {setUserData, removeUserData} from './../redux/ducks/user'

export default class AuthenticationService {
	static async signIn(email, password) {
		try {
			const data = await Firebase.auth().signInWithEmailAndPassword(email, password);
			let user = data.user

			if(data.user) {
				const collection = window.firebaseDB.collection('user')
				const document = collection.doc(data.user.uid)
				const snapshot = await document.get()
				const userData = snapshot.data()

				user = {user, ...userData}

				store.dispatch(setUserData(user))
			}

			return user

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
