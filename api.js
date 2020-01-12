const axios = require("axios");
const fs = require("fs");
require('dotenv').config();


const queryUrl = `https://api.github.com/users/zlhbz/repos?per_page=100`;

async function getListOfRepo() {
    try {
        const response = await axios.get(queryUrl);
        // console.log(response.data);
        console.log(response.data.length);

    } catch (error) {
        console.error(error);
    }
}

async function getNumberOfFollowers() {
    try {
        const response = await axios.get("https://api.github.com/users/zlhbz/followers?per_page=100");

        // console.log(response.data);
        console.log(response.data.length);
    } catch (error) {
        console.error(error);
    }
}
exports.getNumberOfFollowers = getNumberOfFollowers;
exports.getListOfRepo = getListOfRepo;


// axios
//     .get(queryUrl)
//     .then(function (res) {
//         // console.log(res);
//         const listofRepo = res.data.map(repo => repo.name);
//         // console.log(listofRepo);
//         console.log(listofRepo.length);
//         console.log(process.env.CLIENT_ID);

//     });

// axios
//     .get("https://api.github.com/users/zlhbz/followers?per_page=100")
//     .then(function (res) {
//         console.log(res.data.length);
//     })


