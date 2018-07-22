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
		case actionTypes.CLEAR_FIELD: return clearField(state, action);
		default: return state;
	}
}

export default reducer;