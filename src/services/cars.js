import { urlCars } from '../endpoints';

export const allCars = async () => {
    return fetch(urlCars)
        .then(res => res.json())
        .catch(err => console.log(err.message));
};