export default function (state = 1, action) {
    switch (action.type) {
        case 'BASEVALUE':
            return action.payload;
            break;
    }
    return state;
}
