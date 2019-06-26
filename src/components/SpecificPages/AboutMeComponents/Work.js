import React from "react";
import './Work.css';

const skiplist = {
    position: 'Software Development Intern',
    company: 'Skiplist',
    location: 'Cleveland, Ohio',
    date: 'May 2019 - Present'
}

const sparton = {
    position: 'Engineer Shadow',
    company: 'Sparton Medical',
    location: 'Strongsville, Ohio',
    date: 'May 2018'
}

const furniture = {
    position: 'Office Helper',
    company: 'Designers Furniture',
    location: 'Mayfield Heights, Ohio',
    date: '2014 - 2018'
}

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            work: [skiplist, sparton, furniture]
        };
    }

    render() {
        return (
            <div className="work-contianer">

                <div className="work-header">

                    <span>Work Experience</span>

                </div>

                <div className="work-specific-container">

                    <ul className="work-list">

                        {this.state.work.map((entry, index) => {
                            return (
                                <li className="work-entry">

                                    <ul className="work-specifc-list">

                                        <li className="work-specific-entry">

                                            <span className="position">{entry.position}</span>

                                        </li>

                                        <li className="work-specific-entry">

                                            <span className="company">{entry.company}</span>

                                        </li>

                                        <li className="work-specific-entry">

                                            <span className="normal">{entry.location}</span>

                                        </li>

                                        <li className="work-specific-entry">

                                            <span className="normal">{entry.date}</span>

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

export default Work;