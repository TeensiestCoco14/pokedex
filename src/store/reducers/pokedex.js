import * as actionTypes from "../actions/actionTypes";
import {updateObject} from "../utility";
import Pokedex from "../../assets/Pokedex/pokedex.json";


const initialState = {
	pokedex: Pokedex,
	displayed: {
		id: null,
		name: null,
		sprite: null,
		captured: false,
		shinyCaptured: false,
		shinySprite: null,
		count: null,
		description: null,
		species: null,
		type1: null,
		type2: null
	}
}

//Update dex for amount of enteries and if shiny
const recordCapture = (state, action) => {
	return ({
		...state,
		pokedex: state.pokedex.map(
			(entry, i) => i === action.id ? {
				...entry, 
				captured: true,
				shinyCaptured: action.shiny,
				count: state.pokedex[action.id].count + 1} 
			: entry
		)
	});
}

const changeDisplay = (state, action) => {
	return ({
		...state,
		displayed: {
			id: action.pokemonData.id,
			name: action.pokemonData.name,
			sprite: action.pokemonData.sprite,
			captured: action.pokemonData.captured,
			shinyCaptured: action.pokemonData.shinyCaptured,
			shinySprite: action.pokemonData.shinySprite,
			count: action.pokemonData.count,
			description: action.pokemonData.description,
			species: action.pokemonData.species,
			type1: action.pokemonData.type1,
			type2: action.pokemonData.type2
		}
	})
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.RECORD_CAPTURE: return recordCapture(state, action);
		case actionTypes.CHANGE_DISPLAY: return changeDisplay(state, action);
		default: return state;
	}
}

export default reducer;