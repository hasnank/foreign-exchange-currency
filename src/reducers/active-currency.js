export default function (state = [], action) {
    var newState;
    switch (action.type) {
        
        case 'ADD':
            newState = state.concat(action.payload)
            return newState
        case 'REMOVE':
            var index = state.indexOf(action.payload);            
            newState = state;
            if (index !== -1) newState.splice(index, 1);

            return newState;
        default:
            return state;
    }
}