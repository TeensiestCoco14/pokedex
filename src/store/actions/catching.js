import * as actionTypes from "./actionTypes";

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

export const spawnPokemon = () => {
	return {
		type: actionTypes.SPAWN_POKEMON,
	};
};

export const checkSpawnPokemon = (spawned, captured) => {
	return dispatch => {
		if (spawned === false && captured === false) {
			setTimeout(() => {
				dispatch(spawnPokemon());
			}, Math.random() * 10000);
		}
	}
}