export default function (state = ["CAD"], action) {
    switch (action.type) {
        case 'ADD':
            state.push(action.payload)
            console.log(state)
            return state;
            break;
        case 'REMOVE':
            var index = state.indexOf(action.payload);
            var newState = state;
            if (index !== -1) newState.splice(index, 1);
            console.log(newState)
            
            return newState;
            break;
    }
    return state;
}
