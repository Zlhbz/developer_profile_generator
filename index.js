const api = require("./api.js");
const html = require("./generateHTML.js");
const fs = require("fs");

const inquirer = require("inquirer");


console.log(api);
const questions = inquirer
    .prompt([{
        message: "Which one is your favorite color GREEN BLUE PINK or RED?",
        name: "color"
    }
    ]).then(function (data) {
        console.log(data);
        console.log(data.color);
        // console.log(html.generateHTML(data));
        api.getNumberOfFollowers();
        api.getListOfRepo()

        fs.writeFile("index.html", html.generateHTML(data), function (err) {
            if (err) {
                return err;
            }
            console.log("done!!");
        })
    });


// function init() {

//     init();
