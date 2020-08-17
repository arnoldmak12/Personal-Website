import React from "react";
import './Projects.css';
import ticPNG from './ProjectPics/TicTacToePic.PNG';
import npsPNG from './ProjectPics/NPSPic.PNG';
import checkersPNG from './ProjectPics/CheckersPic.PNG';
import personalPNG from './ProjectPics/PersonalWebsitePic.png';
import calcPic from './ProjectPics/CalcPic.PNG';
import chessPic from './ProjectPics/ChessPic.PNG';

const marchMadness = {
    name: "March Madness Predictor",
    img: '',
    description: 'Predicts outcomes of March Madness',
    github: "https://github.com/arnoldmak12/NCAA-Match-Predictor"
}

const chessEngine = {
    name: "Chess Engine",
    img:  chessPic,
    description: 'Play against a Chess AI',
    github: "https://github.com/arnoldmak12/GPA-Calculator"
}

const gpaCalc = {
    name: "GPA Calculator",
    img:  calcPic,
    description: 'Helps calculate your GPA',
    github: "https://github.com/arnoldmak12/GPA-Calculator"
}

const budgetApp = {
    name: "Budgeting Travel App",
    img: '',
    description: 'Helps you plan your vacation',
    github: "https://github.com/arnoldmak12/Team-2-BudgetTravelApp"
}

const personal = {
    name: "Personal Website",
    img: personalPNG,
    description: 'This Site',
    github: "https://github.com/arnoldmak12/Personal-Website"
}

const tic = {
    name: "Tic-Tac-Toe",
    img: ticPNG,
    description: 'AI for the Game of Tic-Tac-Toe',
    github: "https://github.com/arnoldmak12/Tic-Tac-Toe"
}

const nps = {
    name: "NPS Kiosk",
    img: npsPNG,
    description: 'Kiosk for National Park Service',
    github: "https://github.com/arnoldmak12/nps_kiosk"
}

const checkers = {
    name: "Checkers",
    img: checkersPNG,
    description: 'Unfinished Game of Checkers',
    github: "https://github.com/arnoldmak12/Checkers"
}

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects1: [checkers, tic, nps],
            projects2: [personal, budgetApp, gpaCalc],
            projects3: [chessEngine, marchMadness]

        };
    }

    render() {
        return (
            <div className="projects-container">

                <ul className="project1-list">

                    {this.state.projects1.map((entry) => {
                        return (
                            <li className="project-entry">

                                <div className="project-name">

                                    <span>{entry.name}</span>

                                </div>

                                <img className="project-image" src={entry.img} alt={entry.name}/>


                                <div className="project-description">

                                    <span>{entry.description}</span>

                                </div>

                                <div className="project-github">

                                    <a href={entry.github} target="_blank">
                                        GitHub
                                    </a>

                                </div>

                            </li>
                        )
                    })}

                </ul>    

                <ul className="project2-list">

                    {this.state.projects2.map((entry) => {
                        return (
                            <li className="project-entry">

                                <div className="project-name">

                                    <span>{entry.name}</span>

                                </div>

                                <img className="project-image" src={entry.img} alt={entry.name}/>


                                <div className="project-description">

                                    <span>{entry.description}</span>

                                </div>

                                <div className="project-github">

                                    <a href={entry.github} target="_blank">
                                        GitHub
                                    </a>

                                </div>

                            </li>
                        )
                    })}

                </ul>

                <ul className="project3-list">

                    {this.state.projects3.map((entry) => {
                        return (
                            <li className="project-entry">

                                <div className="project-name">

                                    <span>{entry.name}</span>

                                </div>

                                <img className="project-image" src={entry.img} alt={entry.name}/>


                                <div className="project-description">

                                    <span>{entry.description}</span>

                                </div>

                                <div className="project-github">

                                    <a href={entry.github} target="_blank">
                                        GitHub
                                    </a>

                                </div>

                            </li>
                        )
                    })}

                </ul>

            </div>
        );
    }
}

export default Projects;