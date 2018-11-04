export default function (state = null, action) {
    switch (action.type) {
        case 'CURRENCY':
            return action.payload;
            break;
    }
    return state;
}
