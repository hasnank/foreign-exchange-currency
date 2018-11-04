export default function (state = [], action) {
    switch (action.type) {
        case 'ADD':
            state.push(action.payload)
            return state;
            break;
        case 'REMOVE':
            var index = state.indexOf(action.payload);
            var newState = state;
			if (index !== -1) newState.splice(index, 1);

            return newState;
            break;
    }
    return state;
}
