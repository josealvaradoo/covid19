import store from './../redux/store'
import { loadRegions } from '../redux/ducks/regions'
// import { v4 as uuid4 } from "uuid";

export default class RegionsService {
	static async fetchData() {
		const data = []
		const collection = window.firebaseDB.collection("states")
		const snapshot = await collection.get()

		snapshot.forEach(document => data.push(document.data()))

		store.dispatch(loadRegions(data))

		return data
	}

	static async getById(regionId) {
		const collection = window.firebaseDB.collection("states")
		const doc = collection.doc(regionId)
		const snapshot = await doc.get()

		if (!snapshot.data()) {
			return null
		}
		return snapshot.data();
	}

	static async update(id, data) {
		const collection = window.firebaseDB.collection("states")
		const document = collection.doc(id)
		document.update(data)

		return true
	}

	/*
	static async migrate() {
		const regions = [
			"Amazonas", "Anzoategui", "Apure", "Aragua", "Barinas", "Bolivar", "Carabobo", "Caracas",
			"Cojedes", "Delta Amacuro", "Falcon", "Guarico", "Lara", "Zulia", "Merida", "Miranda", "Monagas",
			"NuevaEsparta", "Portuguesa", "Sucre", "Tachira", "Trujillo", "Vargas", "Yaracuy", "Los Roques",
			"Dependencias Federales"
		]

		regions.forEach((_region) => {
			const uuid = uuid4()
			const database = Firebase.firestore(window.firebaseApp);
			const collection = window.firebaseDB.collection("states");
			const doc = collection.doc(uuid);

			doc.set({
				id: uuid,
				name: _region
			})
		})
	}
	*/
}