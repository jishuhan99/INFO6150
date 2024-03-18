// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
]

// Your code goes below
GEOGRAPHY_LIST.push(
    {
        country: 'China',
        capital: 'Beijing',
        largestCity: 'Shanghai',
        subdivisionName: 'province',
        subdivisions: [
            {
                name: 'Guangdong',
                capital: 'Guangzhou',
                largestCity: 'Guangzhou',
                area: 179800,
            },
            {
                name: 'Sichuan',
                capital: 'Chengdu',
                largestCity: 'Chengdu',
                area: 485000,
            },
            {
                name: 'Hunan',
                capital: 'Changsha',
                largestCity: 'Changsha',
                area: 211800,
            },
        ],
    },
    {
        country: 'Japan',
        capital: 'Tokyo',
        largestCity: 'Tokyo',
        subdivisionName: 'prefecture',
        subdivisions: [
            {
                name: 'Hokkaido',
                capital: 'Sapporo',
                largestCity: 'Sapporo',
                area: 83424,
            },
            {
                name: 'Osaka',
                capital: 'Osaka',
                largestCity: 'Osaka',
                area: 1905,
            },
            {
                name: 'Kyoto',
                capital: 'Kyoto',
                largestCity: 'Kyoto',
                area: 4612,
            },
        ],
    }
);

document.addEventListener('DOMContentLoaded', () => {
    const mainElement = document.querySelector('main');

    GEOGRAPHY_LIST.forEach(country => {
        const countryElement = document.createElement('div');
        countryElement.innerHTML = `<h2>${country.country}</h2>
                                    <p>Capital: ${country.capital} - Largest City: ${country.largestCity}</p>`;

        const sublistElement = document.createElement('ul');
        country.subdivisions.forEach(subdivision => {
            sublistElement.innerHTML += `<li>${subdivision.name}: Capital - ${subdivision.capital}, Largest City - ${subdivision.largestCity}, Area - ${subdivision.area} km²</li>`;
        });

        countryElement.appendChild(sublistElement);
        mainElement.appendChild(countryElement);
    });
});

