import {v4 as uuid4} from 'uuid'
import store from './../redux/store'
import {events} from './../redux/ducks/notification'

export default class CasesService {
	static async fetchData() {
		const data = []
		const collection = window.firebaseDB.collection("cases")
		const snapshot = await collection.get()

		snapshot.forEach(document => data.push(document.data()))

		return data
	}

	static async getByGender() {
		const data = []
		const collection = window.firebaseDB.collection("gender")
		const snapshot = await collection.get()

		snapshot.forEach(document => data.push(document.data()))

		return data
	}

	static async getByAge() {
		const data = []
		const collection = window.firebaseDB.collection("age")
		const snapshot = await collection.get()

		snapshot.forEach(document => data.push(document.data()))

		return data
	}

	static async getByStatus() {
		const data = []
		const collection = window.firebaseDB.collection("status")
		const snapshot = await collection.get()

		snapshot.forEach(document => data.push(document.data()))

		return data
	}

	static async getByRegionId(regionId) {
		const data = []
		const collection = window.firebaseDB.collection("cases")
		const doc = collection.where('state_id', '==', regionId)
		const snapshot = await doc.get()
		
		snapshot.forEach(document => data.push(document.data()))

		return data.length > 0 ? data[0] : null
	}
	
	static async create(data) {
		const uuid = uuid4()
		const collection = window.firebaseDB.collection("cases")
		const document = collection.doc(uuid)
		const documentData = {...data, id: uuid}
		document.set(documentData)

		store.dispatch(events.setNotification({
			type: "success",
			code: "cases/case-created-successfully",
			message: `Caso creado exitosamente`
		}))

		return documentData
	}

	static async createStatusCases(data) {
		const uuid = uuid4()
		const collection = window.firebaseDB.collection("status")
		const document = collection.doc(uuid)
		const documentData = { ...data, id: uuid }
		document.set(documentData)

		store.dispatch(events.setNotification({
			type: "success",
			code: "cases/case-created-successfully",
			message: `Registro creado exitosamente`
		}))

		return documentData
	}

	static async update(id, data) {
		const collection = window.firebaseDB.collection("cases")
		const document = collection.doc(id)
		document.update(data)

		store.dispatch(events.setNotification({
			type: "success",
			code: "cases/case-updated-successfully",
			message: `Datos de ${data.state} actualizados correctamente`
		}))

		return true
	}

	static async updateAges(data) {
		const collection = window.firebaseDB.collection("age")
		
		data.map(age => {
			const document = collection.doc(age.id)
			document.update({cases: age.cases})
			return true
		})

		store.dispatch(events.setNotification({
			type: "success",
			code: "cases/case-updated-successfully",
			message: `Datos actualizados correctamente`
		}))

		return true
	}
	
	static async updateGenders(data) {
		const collection = window.firebaseDB.collection("gender")
		
		data.map(gender => {
			const document = collection.doc(gender.id)
			document.update({cases: gender.cases})
			return true
		})

		store.dispatch(events.setNotification({
			type: "success",
			code: "cases/case-updated-successfully",
			message: `Datos actualizados correctamente`
		}))

		return true
	}
}