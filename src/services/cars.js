import { baseUrl, urlCars } from '../endpoints';

export const getAllCars = async () => {
    return fetch(urlCars)
        .then(res => res.json())
        .catch(err => console.log(err.message));
};

export const getFilterData = async (filter) => {
    return fetch(`${baseUrl}/${filter}`)
        .then(res => res.json())
        .catch(err => console.log(err.message));
};