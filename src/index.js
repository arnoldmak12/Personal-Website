import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Particles from 'react-particles-js';
import Home from './components/Home';

ReactDOM.render(
    <div>

        <div className="background">
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 120,
                        },
                        "color": {
                            "value": "FF0000"
                        },
                        "line_linked": {
                            "enable": false,
                        },
                        "size": {
                            "value": 2.5,
                        }
                    }
                }}
            />
        </div>

        <div className="main">
            <Home />
        </div>

    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
