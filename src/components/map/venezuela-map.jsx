import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import Amazonas from './states/amazonas'
import Apure from './states/apure'
import Bolivar from './states/bolivar';
import Monagas from './states/monagas';
import Anzoategui from './states/anzoategui';
import Guarico from './states/guarico';
import Cojedes from './states/cojedes';
import Barinas from './states/barinas';
import Portuguesa from './states/portuguesa';
import Lara from './states/lara';
import Yaracuy from './states/yaracuy';
import Carabobo from './states/carabobo';
import Trujillo from './states/trujillo';
import Merida from './states/merida';
import Tachira from './states/tachira';
import Aragua from './states/aragua';
import Vargas from './states/vargas';
import Caracas from './states/caracas';
import Miranda from './states/miranda';
import Sucre from './states/sucre';
import DeltaAmacuro from './states/delta-amacuro';
import Zulia from './states/zulia';
import NuevaEsparta from './states/nueva-esparta';
import LosRoques from './states/los-roques';
import DependenciasFederales from './states/dependencias-federales';
import Falcon from './states/falcon';

const VenezuelaMap = ({cases}) => {

	const [statesWithCoronavirus, setStatesWithCoronavirus] = useState([])

	useEffect(() => {
		const states = []
		
		cases.map(_case => _case.cases > 0 && states.push(_case.name))

		setStatesWithCoronavirus(states)
	}, [cases])

	return (
		<div className="map">
			<svg id="venezuela_map" viewBox="0 0 1800 1500">
				<Amazonas isActive={statesWithCoronavirus.some(item => item === "Amazonas")} />
				<Anzoategui isActive={statesWithCoronavirus.some(item => item === "Anzoategui")} />
				<Apure isActive={statesWithCoronavirus.some(item => item === "Apure")} />
				<Aragua isActive={statesWithCoronavirus.some(item => item === "Aragua")} />
				<Barinas isActive={statesWithCoronavirus.some(item => item === "Barinas")} />
				<Bolivar isActive={statesWithCoronavirus.some(item => item === "Bolivar")} />
				<Carabobo isActive={statesWithCoronavirus.some(item => item === "Carabobo")} />
				<Caracas isActive={statesWithCoronavirus.some(item => item === "Caracas")} />
				<Cojedes isActive={statesWithCoronavirus.some(item => item === "Cojedes")} />
				<DeltaAmacuro isActive={statesWithCoronavirus.some(item => item === "DeltaAmacuro")} />
				<Falcon isActive={statesWithCoronavirus.some(item => item === "Falcon")} />
				<Guarico isActive={statesWithCoronavirus.some(item => item === "Guarico")} />
				<Lara isActive={statesWithCoronavirus.some(item => item === "Lara")} />
				<Zulia isActive={statesWithCoronavirus.some(item => item === "Zulia")} />
				<Merida isActive={statesWithCoronavirus.some(item => item === "Merida")} />
				<Miranda isActive={statesWithCoronavirus.some(item => item === "Miranda")} />
				<Monagas isActive={statesWithCoronavirus.some(item => item === "Monagas")} />
				<NuevaEsparta isActive={statesWithCoronavirus.some(item => item === "Nueva Esparta")} />
				<Portuguesa isActive={statesWithCoronavirus.some(item => item === "Portuguesa")} />
				<Sucre isActive={statesWithCoronavirus.some(item => item === "Sucre")} />
				<Tachira isActive={statesWithCoronavirus.some(item => item === "Tachira")} />
				<Trujillo isActive={statesWithCoronavirus.some(item => item === "Trujillo")} />
				<Vargas isActive={statesWithCoronavirus.some(item => item === "Vargas")} />
				<Yaracuy isActive={statesWithCoronavirus.some(item => item === "Yaracuy")} />

				<LosRoques isActive={statesWithCoronavirus.some(item => item === "Los Roques")} />
				<DependenciasFederales isActive={statesWithCoronavirus.some(item => item === "Dependencias Federales")} />
			</svg>
		</div>
	)
}

VenezuelaMap.propTypes = {
	cases: PropTypes.arrayOf(PropTypes.object)
};

VenezuelaMap.defaultProps = {
	cases: []
};

export default VenezuelaMap