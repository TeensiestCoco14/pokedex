import * as actionTypes from "../actions/actionTypes";
import {updateObject} from "../utility";
import Bulbasaur from "../../assets/images/sprites/gen1/bulbasaur.png";
import Ivysaur from "../../assets/images/sprites/gen1/ivysaur.png";
import Venusaur from "../../assets/images/sprites/gen1/venusaur.png";
import Charmander from "../../assets/images/sprites/gen1/charmander.png";
import Charmeleon from "../../assets/images/sprites/gen1/charmeleon.png";
import Charizard from "../../assets/images/sprites/gen1/charizard.png";
import Squirtle from "../../assets/images/sprites/gen1/squirtle.png";
import Wartortle from "../../assets/images/sprites/gen1/wartortle.png";
import Blastoise from "../../assets/images/sprites/gen1/blastoise.png";
import Caterpie from "../../assets/images/sprites/gen1/caterpie.png";
import Metapod from "../../assets/images/sprites/gen1/metapod.png";
import Butterfree from "../../assets/images/sprites/gen1/butterfree-f.png";
import Weedle from "../../assets/images/sprites/gen1/weedle.png";
import Kakuna from "../../assets/images/sprites/gen1/kakuna.png";
import Beedrill from "../../assets/images/sprites/gen1/beedrill.png";
import Pidgey from "../../assets/images/sprites/gen1/pidgey.png";
import Pidgeotto from "../../assets/images/sprites/gen1/pidgeotto.png";
import Pidgeot from "../../assets/images/sprites/gen1/pidgeot.png";
import Rattata from "../../assets/images/sprites/gen1/rattata-f.png";

const initialState = {
	pokedex :[
		{
			id: "001",
			name: "Bulbasaur",
			sprite: Bulbasaur,
			captured: false,
			count: 0,
			description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger."
		},
		{
			id: "002",
			name: "Ivysaur",
			sprite: Ivysaur,
			captured: false,
			count: 0
		},
		{
			id: "003",
			name: "Venusaur",
			sprite: Venusaur,
			captured: false,
			count: 0
		},
		{
			id: "004",
			name: "Charmander",
			sprite: Charmander,
			captured: false,
			count: 0
		},
		{
			id: "005",
			name: "Charmeleon",
			sprite: Charmeleon,
			captured: false,
			count: 0
		},
		{
			id: "006",
			name: "Charizard",
			sprite: Charizard,
			captured: false,
			count: 0
		},
		{
			id: "007",
			name: "Squirtle",
			sprite: Squirtle,
			captured: false,
			count: 0
		},
		{
			id: "008",
			name: "Wartortle",
			sprite: Wartortle,
			captured: false,
			count: 0
		},
		{
			id: "009",
			name: "Blastoise",
			sprite: Blastoise,
			captured: false,
			count: 0
		},
		{
			id: "010",
			name: "Caterpie",
			sprite: Caterpie,
			captured: false,
			count: 0
		},
		{
			id: "011",
			name: "Metapod",
			sprite: Metapod,
			captured: false,
			count: 0
		},
		{
			id: "012",
			name: "Butterfree",
			sprite: Butterfree,
			captured: false,
			count: 0
		},
		{
			id: "013",
			name: "Weedle",
			sprite: Weedle,
			captured: false,
			count: 0
		},
		{
			id: "014",
			name: "Kakuna",
			sprite: Kakuna,
			captured: false,
			count: 0
		},
		{
			id: "015",
			name: "Beedrill",
			sprite: Beedrill,
			captured: false,
			count: 0
		},
		{
			id: "016",
			name: "Pidgey",
			sprite: Pidgey,
			captured: false,
			count: 0
		},
		{
			id: "017",
			name: "Pidgeotto",
			sprite: Pidgeotto,
			captured: false,
			count: 0
		},
		{
			id: "018",
			name: "Pidgeot",
			sprite: Pidgeot,
			captured: false,
			count: 0
		},
		{
			id: "019",
			name: "Rattata",
			sprite: Rattata,
			captured: false,
			count: 0
		},
	],
	displayed: {
		id: null,
		name: null,
		sprite: null,
		count: null,
		description: null
	}
}

const recordCapture = (state, action) => {
	return ({
		...state,
		pokedex: state.pokedex.map(
			(entry, i) => i === action.id ? {...entry, captured: true, count: state.pokedex[action.id].count + 1} : entry
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
			count: action.pokemonData.count,
			description: action.pokemonData.description
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