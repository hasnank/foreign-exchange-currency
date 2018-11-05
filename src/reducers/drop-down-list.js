export default function (state = ["CAD", "IDR", "GBP", "CHF", "SGD", "INR", "MYR", "JPY", "KRW"], action) {
    switch (action.type) {
        case 'REMOVE':
            var newState = state.concat(action.payload)
            return newState;
            break;
        case 'ADD':
            var index = state.indexOf(action.payload);
            var newState = state;
			if (index !== -1) newState.splice(index, 1);

            return newState;
            break;
    }
    return state;
}
