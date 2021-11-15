const reducer = (state = null, action) => {
    switch (action.type) {
        case 'add':
            return state = action.cars;
        default:
            return state;
    }
};

export default reducer;