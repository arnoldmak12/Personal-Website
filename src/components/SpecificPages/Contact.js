import React from "react";
import './Contact.css';

const email = {
    name: 'Email',
    link: 'mailto:arnoldmakarov@yahoo.com',
}

const github = {
    name: 'GitHub',
    link: 'https://github.com/arnoldmak12?tab=repositories',
}

const linkedin = {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/arnold-makarov-ab1b28184/',
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [email, github, linkedin]
        };
    }

    render() {
        return (
            <div className="contact-container">

                <div className="contact-header">
                    <span>Contact Info</span>
                </div>

                <ul className="contact-list">

                    {this.state.contacts.map((entry) => {
                        return (
                            

                                <li className="contact-entry">

                                    <a href={entry.link} target="_blank">

                                        {entry.name}

                                    </a>

                                </li>

                            
                        )
                    })}

                </ul>    

            </div>
        );
    }
}

export default Contact;