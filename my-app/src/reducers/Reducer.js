export const initialState = {
	todo: 'Learn about reducers',
	editing: false,
	id: 3892987589
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_TODO':
			return { ...state, todo: action.payload, editing: false };
		case 'CHANGE_EDIT':
			return { ...state, editing: true };
		default:
			return state;
	}
};
