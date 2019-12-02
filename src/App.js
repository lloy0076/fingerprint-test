import React from 'react';

import logo from './logo.svg';
import './App.css';

import moment from 'moment';
import Time   from './Time';
import Fingerprint from './Fingerprint';

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            time: moment(),
        };
    }

    render()
    {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Fingerprint Example
                    </p>

                    <ul>
                        <li><Time time={this.state.time} /></li>
                        <li><Fingerprint /></li>
                    </ul>
                </header>
            </div>
        );
    }


}

export default App;
