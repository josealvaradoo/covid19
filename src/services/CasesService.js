import Firebase from 'firebase'
import {v4 as uuid4} from 'uuid'
import store from './../redux/store'
import {events} from './../redux/ducks/notification'

export default class CasesService {
	static async fetchData() {
		const data = []
		const database = Firebase.firestore(window.firebaseApp)
		const collection = database.collection("cases")
		const snapshot = await collection.get()

		snapshot.forEach(document => data.push(document.data()))

		return data
	}

	static async getByRegionId(regionId) {
		const data = []
		const database = Firebase.firestore(window.firebaseApp)
		const collection = database.collection("cases")
		const doc = collection.where('state_id', '==', regionId)
		const snapshot = await doc.get()
		
		snapshot.forEach(document => data.push(document.data()))

		return data.length > 0 ? data[0] : null
	}
	
	static async create(data) {
		const uuid = uuid4()
		const database = Firebase.firestore(window.firebaseApp)
		const collection = database.collection("cases")
		const document = collection.doc(uuid)
		const documentData = {...data, id: uuid}
		document.set(documentData)

		return documentData
	}

	static async update(id, data) {
		const database = Firebase.firestore(window.firebaseApp)
		const collection = database.collection("cases")
		const document = collection.doc(id)
		document.update(data)

		store.dispatch(events.setNotification({
			type: "success",
			code: "cases/case-updated-successfully",
			message: `Datos de ${data.state} actualizados correctamente`
		}))

		return true
	}
}