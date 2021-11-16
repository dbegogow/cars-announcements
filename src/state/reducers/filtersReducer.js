const reducer = (state = {
    brand: null,
    model: null,
    type: null,
    fuel: null,
    transmission: null,
    fromPrice: null,
    toPrice: null,
    fromYear: null,
    toYear: null,
    doors: null,
    fromPower: null,
    toPower: null
}, action) => {
    state[action.type] = action.filter;

    return state
};

export default reducer;