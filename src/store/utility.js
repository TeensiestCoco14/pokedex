export const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties
	};
};

//utility function to update the state and attach a new object in the reducers
