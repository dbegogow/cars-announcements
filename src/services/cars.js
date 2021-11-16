import { baseUrl, urlCars } from '../endpoints';

export const getAllCars = async (
    brand,
    model,
    type,
    fuel,
    transmission,
    fromPrice,
    toPrice,
    fromYear,
    toYear,
    doors,
    fromHorsepower,
    toHorsepower
) => {
    return fetch(urlCars, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            brand,
            model,
            type,
            fuel,
            transmission,
            fromPrice,
            toPrice,
            fromYear,
            toYear,
            doors,
            fromHorsepower,
            toHorsepower
        })
    })
        .then(res => res.json())
        .catch(err => console.log(err.message));
};

export const getFilterData = async (filter) => {
    return fetch(`${baseUrl}/${filter}`)
        .then(res => res.json())
        .catch(err => console.log(err.message));
};