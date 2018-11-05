export default function (state = {rates: {}}, action) {
    switch (action.type) {
        case 'CURRENCY':
            return action.payload;
        default:
        	return state;
    }
    
}
