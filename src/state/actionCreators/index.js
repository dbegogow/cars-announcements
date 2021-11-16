export const addCars = (cars) => {
    return (dispatch) => {
        dispatch({
            type: 'add',
            cars: cars
        });
    };
};

export const changeFilter = (filter) => {
    return (dispatch) => {
        dispatch({
            type: filter.key,
            filter: filter.value
        });
    };
};