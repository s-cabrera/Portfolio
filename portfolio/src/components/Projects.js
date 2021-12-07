// //Imports
// import React from "react";



//Image Imports
import anime_q from "../images/Anime-Q-Demo.gif"
import password_generator from "../images/password_generator_demo.gif"
import coding_quiz from "../images/coding_quiz_demo.gif"
import weather_dashboard from "../images/weather_dashboard_demo.gif"
import tech_blog from "../images/Tech_Blog_Demo.gif"
import fitness_tracker from "../images/Fitness_Tracker_Demo.gif"

export const projects = [
    {
        title: "Fitness Tracker",
        type: "Full-Stack",
        img_src: fitness_tracker,
        github: "https://github.com/s-cabrera/Fitness_Tracker",
        app: "https://secret-beach-04921.herokuapp.com/",
        description: "Fitness Tracker is a full-stack application that allows a user to continue their current workout or create a new one. The application saves the user's workout information to a database and creates analytics from that data in the Dashboard. The application follows a Model-View-Controller folder structure. The Model consists of the MongoDB schemas. The View consists of Express-Handlebars, HTML, CSS, and Javascript for the frontend. The Controller consists of routes that fetch and retrieve data from the database and change the view accordingly. This application is deployed on Heroku as https://secret-beach-04921.herokuapp.com",
        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Express", 
            "Express-Handlebars",
            "Express-Router",
            "MongoDB Atlas",
            "Mongoose",
            "Path",
            "Morgan",
            "Heroku", 
        ] 
    },
    {
        title: "Anime-Q",
        type: "Full-Stack",
        img_src: anime_q,
        github: "https://github.com/s-cabrera/Anime-Q",
        app: "https://anime-q-list.herokuapp.com",
        description: "Anime-Q is a full stack application in which a user can browse through a list of anime. The user can create an account or log in to an existing account. While logged in the user can add and remove anime to and from their personal watchlist.",
        tech: ["CSS", "JavaScript", "MySQL","Heroku", "Express", "Express-Sessions", "Express-Handlebars", "CSV to JSON", "Sequelize", "Stack"] 
    },
    {
        title: "Password Generator",
        type: "Client",
        img_src: password_generator,
        github: "https://github.com/s-cabrera/Password_Generator",
        app: "https://s-cabrera.github.io/Password_Generator/", 
        description: "A client side application that prompts the user with a series of questions and generates a password based on the user's responses",
        tech: ["HTML", "CSS", "JavaScript"] 
    },
    {
        title: "Coding Quiz",
        type: "Client",
        img_src: coding_quiz,
        github: "https://github.com/s-cabrera/Code_Quiz",
        app: "https://s-cabrera.github.io/Code_Quiz/",
        description: "Coding Quiz is a client side application that prompts the user with a series of multiple-choice coding questions. It keeps score of the correct answers and penalizes incorrect answers. At the end of the quiz, a user can add their initials and score to the \"Highscores\" board. At the end the quiz, they have the option of going back to the \"Homepage\" to take the quiz again or clear the \"Highscores\" board. The application stores and retrieves the \"HighScores\" data from the localStorage ",
        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "JQuery"
        ]  
    },
    {
        title: "Weather Dashboard",
        type: "Client",
        img_src: weather_dashboard,
        github: "https://github.com/s-cabrera/Weather_Dashboard",
        app: "https://s-cabrera.github.io/Weather_Dashboard/", 
        description: "Weather Dashboard is a client side application that takes the user's input from the search bar and fetches information from the OpenWeather One Call API. It displays that city's current forecast and the forecast for the next 5 days. It uses localStorage to store the list of recent cities that the user searched.",
        tech: [
            "HTML",
            "CSS",
            "Bootstrap",
            "JavaScript",
            "Moment.js",
            "JQuery",
            "OpenWeather One Call API"
        ] 
    },
    {
        title: "Tech Blog",
        type: "Full-Stack",
        img_src: tech_blog,
        github: "https://github.com/s-cabrera/Tech-Blog",
        app: "https://shielded-dawn-70616.herokuapp.com/", 
        description: "Tech Blog is a full stack application that acts as a forum for techies to talk about the latest advancements in technology. This app follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. The user can sign up for a new account or log into an already existing account. While logged in, the user can perform CRUD operations on posts as well as comment on other users' posts. They can also delete their posts and all comments associated to that post. The controller updates the database according to what CRUD operation is performed. When logged out, the user may only view posts and comments but cannot change them. This application is deployed to Heroku as https://shielded-dawn-70616.herokuapp.com/" ,
        tech: [
            "CSS",
            "JavaScript",
            "Express-Handlebars", 
            "MySQL2", 
            "Sequelize",
            "Heroku", 
            "dotenv", 
            "bcrypt",
            "express-session",
            "connect-session-sequelize"
        ] 
    }
]