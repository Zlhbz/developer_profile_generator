const axios = require("axios");
const fs = require("fs");
require('dotenv').config();
// console.log(process.env.CLIENT_ID);


const queryUrl = `https://api.github.com/users/zlhbz/repos?per_page=100`;


async function getNumbOfRepo() {
    try {
        const response = await axios.get(queryUrl);
        // console.log(response.data);
        console.log("Number of repos " + response.data.length);
        return response.data.length;

    } catch (error) {
        console.error(error);
    }
}

async function getUserLocation() {
    try {
        const response = await axios.get("https://api.github.com/users/zlhbz");
        console.log(response.data);
        console.log("location we are looking for " + response.data.location);
        city = response.data.location;
        return city;
    } catch (error) {
        console.error(error);
    }
}

async function getUserName() {
    try {
        const response = await axios.get("https://api.github.com/users/zlhbz");
        // console.log(response.data);
        console.log("User name " + response.data.name);
        return response.data.name;
    } catch (error) {
        console.error(error);
    }
}

async function getUserFollowers() {
    try {
        const response = await axios.get("https://api.github.com/users/zlhbz");
        // console.log(response.data);
        console.log("Number of followers " + response.data.followers);
        return response.data.followers;
    } catch (error) {
        console.error(error);
    }
}

async function getUserFollowings() {
    try {
        const response = await axios.get("https://api.github.com/users/zlhbz");
        // console.log(response.data);
        console.log("Number of followings " + response.data.following);
        return response.data.following;
    } catch (error) {
        console.error(error);
    }
}

async function getUserURL() {
    try {
        const response = await axios.get("https://api.github.com/users/zlhbz");
        // console.log(response.data);
        console.log("User URL is " + response.data.html_url);
        return response.data.html_url;
    } catch (error) {
        console.error(error);
    }
}

async function getUserGitHubStars() {
    try {
        const response = await axios.get("https://api.github.com/users/Zlhbz/starred");
        // console.log(response.data);
        console.log("User Stars " + response.data.length);

        return response.data.length;
    } catch (error) {
        console.error(error);
    }
}

async function getUserPic() {
    try {
        const response = await axios.get("https://api.github.com/users/zlhbz");
        console.log("Link of a picture" + response.data.avatar_url);
        return response.data.avatar_url;

    } catch (error) {
        console.error(error);
    }
}


// exports.getNumberOfFollowers = getNumberOfFollowers;
exports.getNumbOfRepo = getNumbOfRepo;
exports.getUserLocation = getUserLocation;
exports.getUserName = getUserName;
exports.getUserFollowers = getUserFollowers;
exports.getUserFollowings = getUserFollowings;
exports.getUserURL = getUserURL;
exports.getUserGitHubStars = getUserGitHubStars;
exports.getUserPic = getUserPic;





