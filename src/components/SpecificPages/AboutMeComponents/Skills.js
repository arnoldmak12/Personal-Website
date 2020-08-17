import React from "react";
import './Skills.css';

const program = {
    type: "Programming",
    skills: 'C • C# • C++ • Java • Python • SQL • MatLab'
};

const web = {
    type: "Web Development",
    skills:  'JavaScript • Node.js • HTML/CSS • jQuery • React'
};

const misc = {
    type: "Misc.",
    skills: 'AWS (Cloud Practitioner Certification) • Azure • ASP.Net Core • Git • PostgreSQL • Unix'
};

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [ program, web, misc]
        };
    }

    render() {
        return (
            <div className="skills-container">

                <div className="skills-header">

                    <span>Skills</span>

                </div>

                <div className="skills-specific-container">

                    <ul className="skills-list">

                        {this.state.skills.map((entry, index) => {
                            return (
                                <li className="skills-entry">

                                    <ul className="skills-specifc-list">

                                        <li className="skills-specific-entry">

                                            <span className="type">{entry.type}</span>

                                        </li>

                                        <li className="skills-specific-entry">

                                            <span className="normal">{entry.skills}</span>

                                        </li>

                                        

                                    </ul>

                                </li>
                            );
                        })}

                    </ul>

                </div>

            </div>
        );
    }
}

export default Skills;