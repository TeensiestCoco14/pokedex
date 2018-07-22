import * as actionTypes from "./actionTypes";


let interval = null;

export const capturePokemon = (id) => {
	return {
		type: actionTypes.CAPTURE_POKEMON,
		id: id
	}
};

export const confirmCapture = () => {
	return {
		type: actionTypes.CONFIRM_CAPTURE
	}
};

export const spawnPokemon = (id, shiny) => {
	return {
		type: actionTypes.SPAWN_POKEMON,
		id: id,
		shiny: shiny
	};
};

export const changeToGrassyField = () => {
	return {
		type: actionTypes.CHANGE_TO_GRASSY_FIELD
	}
}

export const changeToCave = () => {
	return {
		type: actionTypes.CHANGE_TO_CAVE
	}
}

export const changeToOcean = () => {
	return {
		type: actionTypes.CHANGE_TO_OCEAN
	}
}

export const clearField = () => {
	clearInterval(interval);
	return {
		type: actionTypes.CLEAR_FIELD
	}
}

export const checkSpawnPokemon = (spawned, captured, fieldType) => {
	return dispatch => {
		let spawnChart = [];
		if (spawned === false && captured === false) {
			//Chance of rarer spawns or shiny spawns
			let rarity = Math.random();
			let shiny = Math.random();
			
			//------------------------------
			//------------------------------
			//Spawn logic for grassy field
			if (fieldType === "grassy") {
				
				//Common spawns
				if (rarity >= 0.5) {
					if (shiny >= 0.9) {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Uncommon spawns
				} else if (rarity > .5 && rarity < .8) {
					if (shiny >= 0.9) {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Rare Spawns
				} else if (rarity <= .8 && rarity < .99) {
					if (shiny >= 0.9) {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Legendary Spawns
				} else if (rarity === .99) {
					if (shiny >= 0.9) {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}
				}

			
			//--------------------------------------------------
			//--------------------------------------------------
			//Spawn Logic for Caves	
			} else if (fieldType === "cave") {
				//Common spawns
				if (rarity >= 0.5) {
					if (shiny >= 0.9) {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Uncommon spawns
				} else if (rarity > .5 && rarity < .8) {
					if (shiny >= 0.9) {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Rare Spawns
				} else if (rarity <= .8 && rarity < .99) {
					if (shiny >= 0.9) {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Legendary Spawns
				} else if (rarity === .99) {
					if (shiny >= 0.9) {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * 0)]));
						}, Math.random() * 4000 + 1000);
					}
				}

			
			//---------------------------------------------------
			//----------------------------------------------------
			//Spawn Logice for Oceans
			} else if (fieldType === "ocean") {
				//Common spawns
				if (rarity >= 0.5) {
					if (shiny >= 0.9) {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Uncommon spawns
				} else if (rarity > .5 && rarity < .8) {
					if (shiny >= 0.9) {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Rare Spawns
				} else if (rarity <= .8 && rarity < .99) {
					if (shiny >= 0.9) {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Legendary Spawns
				} else if (rarity === .99) {
					if (shiny >= 0.9) {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						spawnChart = [];
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}
				}
			}
		}
	}
}