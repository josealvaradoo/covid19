import Firebase from 'firebase'
import { v4 as uuid4 } from "uuid";

export default class RegionsService {
	static async fetchData() {
		const data = []
		const database = Firebase.firestore(window.firebaseApp)
		const collection = database.collection("states")
		const snapshot = await collection.get()

		snapshot.forEach(document => data.push(document.data()))

		return data
	}

	static async getById(regionId) {
		const database = Firebase.firestore(window.firebaseApp)
		const collection = database.collection("states")
		const doc = collection.doc(regionId)
		const snapshot = await doc.get()

		if (!snapshot.data()) {
			return null
		}
		return snapshot.data();
	}

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
			const collection = database.collection("states");
			const doc = collection.doc(uuid);

			doc.set({
				id: uuid,
				name: _region
			})
		})
	}
}