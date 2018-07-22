import * as actionTypes from "./actionTypes";

export const recordCapture = (id, shiny) => {
	return {
		type: actionTypes.RECORD_CAPTURE,
		id: id,
		shiny: shiny
	}
}

export const changeDisplay = (pokemonData) => {
	return {
		type: actionTypes.CHANGE_DISPLAY,
		pokemonData: pokemonData
	}
}