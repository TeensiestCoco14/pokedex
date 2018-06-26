import * as actionTypes from "../actions/actionTypes";
import {updateObject} from "../utility";

const initialState = {
	spawned: false,
	captured: false,
	id: 0,
};



const spawnPokemon = (state, action) => {
	return updateObject(state, {
		spawned: true,
		id: Math.floor(Math.random() * 19)
	})
}

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

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.CAPTURE_POKEMON: return capturePokemon(state, action);
		case actionTypes.SPAWN_POKEMON: return spawnPokemon(state, action);
		case actionTypes.CONFIRM_CAPTURE: return confirmCapture(state, action);
		default: return state;
	}
}

export default reducer;