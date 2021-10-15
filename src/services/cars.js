import { baseUrl, urlCars } from '../endpoints';

export const allCars = async () => {
    return fetch(urlCars)
        .then(res => res.json())
        .catch(err => console.log(err.message));
};

export const filterData = async (filter) => {
    return fetch(`${baseUrl}/${filter}`)
        .then(res => res.json())
        .catch(err => console.log(err.message));
};