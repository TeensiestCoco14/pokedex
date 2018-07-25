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

export const changeField = (field) => {
	return {
		type: actionTypes.CHANGE_FIELD,
		field: field
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
				if (rarity <= 0.5) {
					spawnChart = [15, 18, 20, 22, 24, 28, 31, 36, 42, 57, 68, 76, 83];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Uncommon spawns
				} else if (rarity > .5 && rarity < .8) {
					spawnChart = [16, 19, 29, 32, 43, 84, 132];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Rare Spawns
				} else if (rarity >= .8 && rarity < .99) {
					spawnChart = [21, 23, 37, 77, 112, 127, 132];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Legendary Spawns
				} else if (rarity === .99) {
					spawnChart = [114, 142, 150];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
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
				if (rarity <= 0.5) {
					spawnChart = [34, 38, 40, 45, 73, 91];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Uncommon spawns
				} else if (rarity > .5 && rarity < .8) {
					spawnChart = [3, 26, 41, 46, 62, 65, 95, 110, 137, 139];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Rare Spawns
				} else if (rarity >= .8 && rarity < .99) {
					spawnChart = [27, 35, 39, 63, 74, 92, 94, 96, 111, 121, 123, 138, 140, 146, 147];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Legendary Spawns
				} else if (rarity === .99) {
					spawnChart = [30, 33, 64, 75, 93, 141, 148, 149, 150];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * 0)]));
						}, Math.random() * 4000 + 1000);
					}
				}

			
			//---------------------------------------------------
			//----------------------------------------------------
			//Spawn Logic for Oceans
			} else if (fieldType === "ocean") {
				//Common spawns
				if (rarity <= 0.5) {
					spawnChart = [6, 71, 85, 97, 117, 119, 128];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Uncommon spawns
				} else if (rarity > .5 && rarity < .8) {
					spawnChart = [7, 53, 78, 89, 98, 115, 118, 120, 146];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Rare Spawns
				} else if (rarity >= .8 && rarity < .99) {
					spawnChart = [8, 54, 72, 79, 86, 90, 116, 133, 137, 147];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Legendary Spawns
				} else if (rarity === .99) {
					spawnChart = [129, 130, 138, 143, 148, 150]
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}
				}
			

			
			//---------------------------------------------------
			//----------------------------------------------------
			//Spawn Logic for Snow
			} else if (fieldType === "snow") {
				//Common spawns
				if (rarity <= 0.5) {
					spawnChart = [18, 65];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Uncommon spawns
				} else if (rarity > .5 && rarity < .8) {
					spawnChart = [91, 121, 123];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Rare Spawns
				} else if (rarity >= .8 && rarity < .99) {
					spawnChart = [92, 105, 106, 115];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Legendary Spawns
				} else if (rarity === .99) {
					spawnChart = [93, 144, 150];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}
				}
			

			
			//---------------------------------------------------
			//----------------------------------------------------
			//Spawn Logic for River
			} else if (fieldType === "river") {
				//Common spawns
				if (rarity <= 0.5) {
					spawnChart = [53, 68, 117, 128];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Uncommon spawns
				} else if (rarity > .5 && rarity < .8) {
					spawnChart = [6, 54, 60, 78, 89];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Rare Spawns
				} else if (rarity >= .8 && rarity < .99) {
					spawnChart = [7, 61, 79, 133, 137];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Legendary Spawns
				} else if (rarity === .99) {
					spawnChart = [130, 138, 150];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}
				}
			

			
			//---------------------------------------------------
			//----------------------------------------------------
			//Spawn Logice for Desert
			} else if (fieldType === "desert") {
				//Common spawns
				if (rarity <= 0.5) {
					spawnChart = [26, 49, 57, 103, 110];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Uncommon spawns
				} else if (rarity > .5 && rarity < .8) {
					spawnChart = [3, 22, 27, 50, 55, 104, 139];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Rare Spawns
				} else if (rarity >= .8 && rarity < .99) {
					spawnChart = [23, 37, 56, 58, 77, 84, 95, 111, 135, 140];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Legendary Spawns
				} else if (rarity === .99) {
					spawnChart = [75, 125, 141, 145, 150];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}
				}
			

			
			//---------------------------------------------------
			//----------------------------------------------------
			//Spawn Logice for City
			} else if (fieldType === "city") {
				//Common spawns
				if (rarity <= 0.5) {
					spawnChart = [15, 18, 20, 80, 87, 99, 108];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Uncommon spawns
				} else if (rarity > .5 && rarity < .8) {
					spawnChart = [19, 24, 51, 95, 100, 109];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Rare Spawns
				} else if (rarity >= .8 && rarity < .99) {
					spawnChart = [25, 52, 81, 88, 96, 124, 134];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Legendary Spawns
				} else if (rarity === .99) {
					spawnChart = [144, 150];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}
				}
			

			
			//---------------------------------------------------
			//----------------------------------------------------
			//Spawn Logice for forest
			} else if (fieldType === "forest") {
				//Common spawns
				if (rarity <= 0.5) {
					spawnChart = [9, 10, 12, 42, 68];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Uncommon spawns
				} else if (rarity > .5 && rarity < .8) {
					spawnChart = [13, 18, 22, 24, 43, 47, 55, 69, 101, 123, 126, 150];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Rare Spawns
				} else if (rarity >= .8 && rarity < .99) {
					spawnChart = [1, 11, 14, 16, 44, 48, 70, 82, 95, 102, 107, 113];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Legendary Spawns
				} else if (rarity === .99) {
					spawnChart = [2, 96, 112, 114];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}
				}
			

			
			//---------------------------------------------------
			//----------------------------------------------------
			//Spawn Logic for mountain
			} else if (fieldType === "mountain") {
				//Common spawns
				if (rarity <= 0.5) {
					spawnChart = [3, 55, 65, 73];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Uncommon spawns
				} else if (rarity > .5 && rarity < .8) {
					spawnChart = [4, 49, 50, 56, 66, 74, 139];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Rare Spawns
				} else if (rarity >= .8 && rarity < .99) {
					spawnChart = [30, 34, 58, 67, 94, 105, 106, 135, 140, 141];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}

				//Legendary Spawns
				} else if (rarity === .99) {
					spawnChart = [5, 75, 111, 114, 142, 143, 144, 145, 149, 150];
					if (shiny >= 0.9) {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)], true));
						}, Math.random() * 4000 + 1000);
					} else {
						interval = setTimeout(() => {
							dispatch(spawnPokemon(spawnChart[Math.floor(Math.random() * spawnChart.length)]));
						}, Math.random() * 4000 + 1000);
					}
				}
			}
		}
	}
}