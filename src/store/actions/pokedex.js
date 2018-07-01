import * as actionTypes from "./actionTypes";

export const recordCapture = (id, name) => {
	return {
		type: actionTypes.RECORD_CAPTURE,
		id: id,
	}
}

export const changeDisplay = (pokemonData) => {
	return {
		type: actionTypes.CHANGE_DISPLAY,
		pokemonData: pokemonData
	}
}