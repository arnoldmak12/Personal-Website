import React from "react";
import './Projects.css';
import ticPNG from './ProjectPics/TicTacToePic.PNG';
import npsPNG from './ProjectPics/NPSPic.PNG';
import CheckersPNG from './ProjectPics/CheckersPic.PNG'

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
    img: CheckersPNG,
    description: 'Unfinished Game of Checkers',
    github: "https://github.com/arnoldmak12/Checkers"
}

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects1: [checkers, tic, nps]
        };
    }

    render() {
        return (
            <div className="projects-container">

                <ul className="project-list">

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

            </div>
        );
    }
}

export default Projects;