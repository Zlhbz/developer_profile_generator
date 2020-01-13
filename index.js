const api = require("./api.js");
const html = require("./generateHTML.js");
const fs = require("fs");
const pdf = require("html-pdf");
const path = require("path");
const open = require("open");
const inquirer = require("inquirer");

const questions = inquirer
    .prompt([{
        message: "Which one is your favorite color green, blue, pink or red?",
        name: "color"
    }
    ]).then(function (data) {
        // console.log("data mi data " + data);
        console.log(data.color);

        api.getNumbOfRepo().then(function (response) {
            data.repo = response;
            console.log(data);

            api.getUserName().then(function (response) {
                data.name = response;
                console.log(data);
                api.getUserFollowers().then(function (response) {
                    data.followers = response;
                    console.log(data);

                    api.getUserFollowings().then(function (response) {
                        data.followings = response;
                        console.log(data);

                        api.getUserURL().then(function (response) {
                            data.URL = response;
                            console.log(data);

                            api.getUserGitHubStars().then(function (response) {
                                data.stars = response;
                                console.log(data);

                                api.getUserLocation().then(function (response) {
                                    data.city = response;
                                    console.log(data);

                                    api.getUserPic().then(function (response) {
                                        data.pic = response;
                                        console.log(data);

                                        var html_final = html.generateHTML(data);
                                        fs.writeFile("index.html", html_final, function (err) {
                                            if (err) {
                                                console.log("error");
                                                return err;
                                            }
                                            console.log("done!!");
                                        })
                                        pdf.create(html_final, { format: "Letter" }).toFile(path.join(__dirname, "resume.pdf"),
                                            function (err, result) {
                                                if (err) {
                                                    return console.error(err);
                                                }
                                            })
                                        open(path.join(process.cwd(), "resume.pdf"));

                                    });

                                })
                            })
                        })
                    })
                })
            })
        })

    })


