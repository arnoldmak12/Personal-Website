import React from "react";
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: '',
            tabs: ['About Me', 'Projects', 'Contact']
        };
    }

    handleClick(button) {
        if (button === this.state.clicked) {
            this.setState({
                clicked: '',
            })
        }
        else {
            this.setState({
                clicked: button,
            })
        }
    }

    render() {
        return (
            <div className="home-page">

                <div className="name-container">

                    <span className="name">ARNOLD MAKAROV</span>

                </div>

                <div className="nav-container">

                    <ul className="option-list">

                        {this.state.tabs.map((name) => {
                            return (
                                <li>
                                    <button className="nav-option" onClick={() => this.handleClick(name)}>

                                        <span>{name}</span>

                                    </button>
                                </li>
                            );
                        })}

                    </ul>

                </div>

                <div className="info-container">

                    {this.state.clicked === 'About Me' && console.log("me")}
                    {this.state.clicked === 'Projects' && console.log("projects")}
                    {this.state.clicked === 'Contact' && console.log("contacts")}

                </div>

            </div>
        );
    }
}

export default Home;