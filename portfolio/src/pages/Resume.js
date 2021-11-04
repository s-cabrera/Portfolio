//Imports
import React from "react";

function Resume(props) {
    return (
        <div className="ps-2 text-start py-3">
            <p className="fs-5 text text-decoration-underline" >Resume</p>
            <a href="https://docs.google.com/document/d/1NJH6z2xB7R2hKH3Lv2bGI11YP1hH4gKq3eATM1iFm5I/edit"
                className="text-decoration-none my-4" rel="noreferrer" target="_blank">
                Click to View Resume
            </a>
            <p className="fs-5 text text-decoration-underline" >Front-end Proficiencies</p>
            <ul className="skill-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
                <li>Handlebars</li>
                <li>React.js</li>
            </ul>
            <p className="fs-5 text text-decoration-underline" >Back-end Proficiencies</p>
            <ul className="skill-list">
                <li>Node.js</li>
                <li>APIs</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDD, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    );
}

export default Resume;