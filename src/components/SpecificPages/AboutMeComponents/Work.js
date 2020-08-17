import React from "react";
import './Work.css';

const capitalOneInternship = {
    position: 'SWE Intern',
    company: 'Capital One',
    location: 'Remote',
    date: 'May 2020 - August 2020',
    description: [
        'Created the frontend for a data service using React',
        'Assisted in the backend development by implementing an AWS Lambda query function that interacts with a PostgreSQL database on AWS RDS using Python and SQL']
}

const capitalOneCoders = {
    position: 'Mentor',
    company: 'Capital One',
    location: 'Remote',
    date: 'May 2020 - July 2020',
    description: [
        "Volunteered in Capital One's CODERS Web Development Program for kids"]
}

const capitalOneSummit = {
    position: 'SWE Summit',
    company: 'Capital One',
    location: 'Clarendon, Virginia',
    date: 'August 2019',
    description: [
        'Participated in various workshops and competed in an event Hackathon']
}

const skiplist = {
    position: 'SWE Intern',
    company: 'Skiplist',
    location: 'Cleveland, Ohio',
    date: 'May 2019 - August 2019',
    description: [
        'Developing Full-Stack Project Management Tool with React, HTML/CSS, and Redux',
        'Accessing/Storing Data with PostgreSQL',
        'Controlling Versions of Project with Git']
}

const sparton = {
    position: 'Engineer Shadow',
    company: 'Sparton Medical',
    location: 'Strongsville, Ohio',
    date: 'May 2018',
    description: [
    'Shadowed Software Engineer for Two Weeks',
    'Documented Bugs in Jira']
}

const furniture = {
    position: 'Office Helper',
    company: 'Designers Furniture',
    location: 'Mayfield Heights, Ohio',
    date: '2014 - 2018',
    description: [
        'Processed Invoices on Inventory Software',
        'Optimized the Store’s Website on WordPress',
        'Assembled and Repaired Various Furniture']
}

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            work: [capitalOneInternship, capitalOneCoders, capitalOneSummit ,skiplist, sparton, furniture]
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

                                                <div className="work-specific-date">

                                                    <span className="bolded">{entry.date}</span>

                                                </div>

                                            

                                        </li>

                                        <li className="work-specific-entry">

                                            <span className="bolded">{entry.company}, </span>
                                            <span className="normal">{entry.location}</span>


                                        </li>

                                        <li className="work-specific-entry">
                                            
                                            <ul>
                                            <span className="normal">{entry.description.map((entry) => {
                                                return (
                                                    <li className="work-specific-description">{entry}</li>
                                                );
                                            })}</span>
</ul>
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