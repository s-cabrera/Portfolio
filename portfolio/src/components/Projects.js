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
        description: "Fitness Tracker is a full-stack application that takes",
        tech: ["Handlebars", "Heroku"] 
    },
    {
        title: "Anime-Q",
        type: "Full-Stack",
        img_src: anime_q,
        github: "https://github.com/s-cabrera/Anime-Q",
        app: "https://anime-q-list.herokuapp.com",
        description: "Create your anime watchlist with Anime-Q",
        tech: ["HTML","CSS", "JavaScript", "MySQL",] 
    },
    {
        title: "Password Generator",
        type: "Client",
        img_src: password_generator,
        github: "https://github.com/s-cabrera/Password_Generator",
        app: "https://s-cabrera.github.io/Password_Generator/", 
        description: "A client side application that prompts the user with a series of questions and generates a password based on the user's response",
        tech: ["HTML", "CSS", "JavaScript"] 
    },
    {
        title: "Coding Quiz",
        type: "Client",
        img_src: coding_quiz,
        github: "https://github.com/s-cabrera/Code_Quiz",
        app: "https://s-cabrera.github.io/Code_Quiz/",
        description: "Coding Quiz is a client side application that saves ",
        tech: ["None"]  
    },
    {
        title: "Weather Dashboard",
        type: "Client",
        img_src: weather_dashboard,
        github: "https://github.com/s-cabrera/Weather_Dashboard",
        app: "https://s-cabrera.github.io/Weather_Dashboard/", 
        description: "Weather Dashboard is a client side application that displays the forecast of the city the user enters in the search bar ",
        tech: ["None"] 
    },
    {
        title: "Tech Blog",
        type: "Full-Stack",
        img_src: tech_blog,
        github: "https://github.com/s-cabrera/Tech-Blog",
        app: "https://shielded-dawn-70616.herokuapp.com/", 
        description: "A forum for techies to talk about the latests advancements in technology",
        tech: ["None"] 
    }
]