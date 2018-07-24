import * as actionTypes from "../actions/actionTypes";
import {updateObject} from "../utility";

const initialState = {
	spawned: false,
	shiny: false,
	captured: false,
	fieldType: null,
	id: 0,
};


//Spawn a Pokemon
const spawnPokemon = (state, action) => {
	return updateObject(state, {
		spawned: true,
		id: action.id,
		shiny: action.shiny
	})
}

//Capture and reset state to spawn new pokemon
const capturePokemon = (state, action) => {
	return updateObject(state, {
		spawned: false,
		captured: true,
	});
};

const confirmCapture = (state, action) => {
	return updateObject(state, {
		spawned: false,
		captured: false,
	});
}

//Change to different fields to catch
const changeToGrassyField = (state, action) => {
	return updateObject(state, {
		fieldType: "grassy"
	});
}

const changeToCave = (state, action) => {
	return updateObject(state, {
		fieldType: "cave"
	})
}

const changeToOcean = (state, action) => {
	return updateObject(state, {
		fieldType: "ocean"
	})
}

const changeToForest = (state, action) => {
	return updateObject(state, {
		fieldType: "forest"
	})
}

const changeToRiver = (state, action) => {
	return updateObject(state, {
		fieldType: "river"
	})
}

const changeToDesert = (state, action) => {
	return updateObject(state, {
		fieldType: "desert"
	})
}

const changeToCity = (state, action) => {
	return updateObject(state, {
		fieldType: "city"
	})
}

const changeToMountain = (state, action) => {
	return updateObject(state, {
		fieldType: "mountain"
	})
}

const changeToSnow = (state, action) => {
	return updateObject(state, {
		fieldType: "snow"
	})
}

const clearField = (state, action) => {
	return updateObject(state, {
		spawned: false,
		captured: false,
		fieldType: null,
		id: 0
	});
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.CAPTURE_POKEMON: return capturePokemon(state, action);
		case actionTypes.SPAWN_POKEMON: return spawnPokemon(state, action);
		case actionTypes.CONFIRM_CAPTURE: return confirmCapture(state, action);
		case actionTypes.CHANGE_TO_GRASSY_FIELD: return changeToGrassyField(state, action);
		case actionTypes.CHANGE_TO_CAVE: return changeToCave(state, action);
		case actionTypes.CHANGE_TO_OCEAN: return changeToOcean(state, action);
		case actionTypes.CHANGE_TO_DESERT: return changeToDesert(state, action);
		case actionTypes.CHANGE_TO_MOUNTAIN: return changeToMountain(state, action);
		case actionTypes.CHANGE_TO_CITY: return changeToCity(state, action);
		case actionTypes.CHANGE_TO_FOREST: return changeToForest(state, action);
		case actionTypes.CHANGE_TO_RIVER: return changeToRiver(state, action);
		case actionTypes.CHANGE_TO_SNOW: return changeToSnow(state, action);
		case actionTypes.CLEAR_FIELD: return clearField(state, action);
		default: return state;
	}
}

export default reducer;