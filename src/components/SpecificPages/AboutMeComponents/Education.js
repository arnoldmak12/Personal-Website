import React from "react";
import './Education.css';

const OSU = {
    school: 'Ohio State University',
    line1: 'BS in Computer Science and Engineering',
    line2: 'Minor in Mathematics',
    line3: 'Expected Grad: May 2022',
    line4: 'GPA: 3.72'
}

const solon = {
    school: 'Solon High School',
    line1: 'Graduated with Honors Diploma in May 2018',
    line2: 'ACT: 33',
    line3: ''
}

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            education: [OSU, solon]
        };
    }

    render() {
        return (
            <div className="education-container">

                <div className="align">

                        <div className="education-header">

                            <span>Education</span>

                        </div>

                        <div className="education-specific-container">
                            
<ul className="education-list">
                            
                        {this.state.education.map((entry, index) => {
                            return (
                                <li className="education-entry">

                                    <ul className="education-specifc-list">

                                        <li className="education-specific-entry">

                                            <span className="school">{entry.school}</span>

                                        </li>

                                        <li className="education-specific-entry">

                                            <span className="normal">{entry.line1}</span>

                                        </li>

                                        <li className="education-specific-entry">

                                            <span className="normal">{entry.line2}</span>

                                        </li>

                                        <li className="education-specific-entry">

                                            <span className="normal">{entry.line3}</span>

                                        </li>

                                        <li className="education-specific-entry">

                                            <span className="normal">{entry.line4}</span>

                                        </li>

                                    </ul>

                                </li>
                            );
                        })}

</ul>

                        </div>

                </div>

            </div>
        );
    }
}

export default Education;