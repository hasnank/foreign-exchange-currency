export default function (state = [], action) {
    switch (action.type) {
        case 'ADD':
            var newState = state.concat(action.payload)
            return newState;
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
