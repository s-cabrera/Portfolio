// //Imports
// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from "@fortawesome/free-brands-svg-icons";

// //Components 
// import Project from "./Project";

//Image Imports
import anime_q from "../images/Anime-Q-Demo.gif"
import password_generator from "../images/password_generator_demo.gif"
import coding_quiz from "../images/coding_quiz_demo.gif"
import weather_dashboard from "../images/weather_dashboard_demo.gif"
import tech_blog from "../images/Tech_Blog_Demo.gif"
import fitness_tracker from "../images/Fitness_Tracker_Demo.gif"
// import { Avatar } from "@chakra-ui/avatar";
// import { Center } from "@chakra-ui/layout";

export const projects = [
    {
        title: "Fitness Tracker",
        img_src: fitness_tracker,
        github: "https://github.com/s-cabrera/Fitness_Tracker",
        app: "https://secret-beach-04921.herokuapp.com/", 
    },
    {
        title: "Anime-Q",
        img_src: anime_q,
        github: "https://github.com/s-cabrera/Anime-Q",
        app: "https://anime-q-list.herokuapp.com", 
    },
    {
        title: "Password Generator",
        img_src: password_generator,
        github: "https://github.com/s-cabrera/Password_Generator",
        app: "https://s-cabrera.github.io/Password_Generator/", 
    },
    {
        title: "Coding Quiz",
        img_src: coding_quiz,
        github: "https://github.com/s-cabrera/Code_Quiz",
        app: "https://s-cabrera.github.io/Code_Quiz/", 
    },
    {
        title: "Weather Dashboard",
        img_src: weather_dashboard,
        github: "https://github.com/s-cabrera/Weather_Dashboard",
        app: "https://s-cabrera.github.io/Weather_Dashboard/", 
    },
    {
        title: "Tech Blog",
        img_src: tech_blog,
        github: "https://github.com/s-cabrera/Tech-Blog",
        app: "https://shielded-dawn-70616.herokuapp.com/", 
    }
]


        // <div className="row justify-content-center pb-3" >
        //     <div className="card project-card col col-10 col-lg-5 m-2">
        //         <div className="card-body">
        //             <a href="https://secret-beach-04921.herokuapp.com/" rel="noreferrer" target="_blank">
        //                 <h2>Fitness Tracker</h2>
        //                 <img className="img-fluid box-shadow" src={fitness_tracker} alt="Fitness_Tracker_Demo" />
        //                 {/* <img src={picture} className="img-fluid" alt="photo1" /> */}
        //                 {/* <i class="fab fa-github project-github" href="https://github.com/s-cabrera/Pokemon_Search" style={{cursor: "pointer"}}></i> */}
        //                 <a href="https://github.com/s-cabrera/Fitness_Tracker" className="project-github" style={{ cursor: "pointer" }} rel="noreferrer" target="_blank" >
        //                     <FontAwesomeIcon icon={faGithub} />
        //                 </a>
        //             </a>
        //         </div>
        //     </div>


        //     <div className="card project-card col col-10 col-lg-5 m-2">
        //         <div className="card-body">
        //             <a href="https://anime-q-list.herokuapp.com" rel="noreferrer" target="_blank">
        //                 <h2>Anime-Q</h2>
        //                 <img className="img-fluid box-shadow" src={anime_q} alt="Anime-Q Demo" />
        //                 {/* <img src={picture} className="img-fluid" alt="photo2" /> */}
        //                 {/* <i class="fab fa-github project-github" href="https://github.com/s-cabrera/Phase2_Project" style={{cursor: "pointer"}}></i> */}
        //                 <a href="https://github.com/s-cabrera/Phase2_Project" className="project-github" style={{ cursor: "pointer" }} rel="noreferrer" target="_blank" >
        //                     <FontAwesomeIcon icon={faGithub} />
        //                 </a>
        //             </a>
        //         </div>
        //     </div>
        
        
        //     <div className="card project-card col col-10 col-lg-5 m-2">
        //         <div className="card-body">
        //             <a href="https://s-cabrera.github.io/Password_Generator/" rel="noreferrer" target="_blank">
        //                 <h2>Password Generator</h2>
        //                 <img className="img-fluid box-shadow" src={password_generator} alt="Password Generator Demo" />
        //                 {/* <img src={picture} className="img-fluid" alt="photo3" /> */}
        //                 {/* <button className="fab fa-github project-github" href="https://github.com/s-cabrera/Password_Generator" style={{cursor: "pointer"}} /> */}
        //                 <a href="https://github.com/s-cabrera/Password_Generator" className="project-github" style={{ cursor: "pointer" }} rel="noreferrer" target="_blank" >
        //                     <FontAwesomeIcon icon={faGithub} />
        //                 </a>
        //             </a>
        //         </div>
        //     </div>
        
        
        //     <div className="card project-card col col-10 col-lg-5 m-2">
        //         <div className="card-body">
        //             <a href="https://s-cabrera.github.io/Code_Quiz/" rel="noreferrer" target="_blank">
        //                 <h2>Coding Quiz</h2>
        //                 <img className="img-fluid box-shadow" src={coding_quiz} alt="Coding Quiz Demo" />
        //                 {/* <img src={picture} className="img-fluid" alt="photo3" /> */}
        //                 {/* <i class="fab fa-github project-github" href="https://github.com/s-cabrera/Code_Quiz" style={{cursor: "pointer"}}></i> */}
        //                 <a href="https://github.com/s-cabrera/Code_Quiz" className="project-github" style={{ cursor: "pointer" }} rel="noreferrer" target="_blank" >
        //                     <FontAwesomeIcon icon={faGithub} />
        //                 </a>
        //             </a>
        //         </div>
        //     </div>
        
        
        //     <div className="card project-card col col-10 col-lg-5 m-2">
        //         <div className="card-body">
        //             <a href="https://s-cabrera.github.io/Weather_Dashboard/" rel="noreferrer" target="_blank">
        //                 <h2>Weather Dashboard</h2>
        //                 <img className="img-fluid box-shadow" src={weather_dashboard} alt="Weather Dashboard Demo" />
        //                 {/* <img src={picture} className="img-fluid" alt="photo3" /> */}
        //                 {/* <i class="fab fa-github project-github" href="https://github.com/s-cabrera/Weather_Dashboard" style={{cursor: "pointer"}}></i> */}
        //                 <a href="https://github.com/s-cabrera/Weather_Dashboard" className="project-github" style={{ cursor: "pointer" }} rel="noreferrer" target="_blank" >
        //                     <FontAwesomeIcon icon={faGithub} />
        //                 </a>
        //             </a>
        //         </div>
        //     </div>
        
        
        //     <div className="card project-card col col-10 col-lg-5 m-2">
        //         <div className="card-body">
        //             <a href="https://shielded-dawn-70616.herokuapp.com/" rel="noreferrer" target="_blank">
        //                 <h2>Tech Blog</h2>
        //                 <img class="box-shadow" src={tech_blog} alt="Pokemon Search Demo" />
        //                 {/* <img src={picture} className="img-fluid" alt="photo3" /> */}
        //                 {/* <i class="fab fa-github project-github" href="https://github.com/s-cabrera/Pokemon_Search" style={{cursor: "pointer"}}></i> */}
        //                 <a href="https://github.com/s-cabrera/Tech-Blog" className="project-github" style={{ cursor: "pointer" }} rel="noreferrer" target="_blank" >
        //                     <FontAwesomeIcon icon={faGithub} />
        //                 </a>
        //             </a>
        //         </div>
        //     </div>
        // </div>