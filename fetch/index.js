const fetch = require ('node-fetch');
// const bluebird = require('bluebird');


const url = 'https://swapi.co/api/people/1';

async function getSwapi() {
    let data = await fetch(url, {method: 'GET'});
    console.log(await data.json());
}

getSwapi();

// async function getSwapi() {
//     let data = await fetchPromisified(url);
//     console.log(await data.json());
// }

// getSwapi();

// fetch(url, {method: 'GET'})
// .then(res => res.json())
// .then(res => console.log(res))

