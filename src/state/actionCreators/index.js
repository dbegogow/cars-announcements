export const addCars = (cars) => {
    return (dispatch) => {
        dispatch({
            type: 'add',
            cars: cars
        });
    };
};