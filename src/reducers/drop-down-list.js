export default function (state = ["CAD", "IDR", "GBP", "CHF", "SGD", "INR", "MYR", "JPY", "KRW"], action) {
    var newState;
    switch (action.type) {
        
        case 'REMOVE':
            newState = state.concat(action.payload)
            return newState
        case 'ADD':
            var index = state.indexOf(action.payload);            
            newState = state;
			if (index !== -1) newState.splice(index, 1);

            return newState;
        default:
            return state;
    }
}
