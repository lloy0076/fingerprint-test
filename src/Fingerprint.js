/**
 *   Copyright 2019 David Sompian Lloyd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *
 *   You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 **/

import React  from 'react';
import moment from 'moment';

import Fingerprint2 from 'fingerprintjs2';


class Fingerprint extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            time:        moment(),
            fingerprint: undefined,
        };
    }

    render()
    {
        return (
            <div>
                {this.state.fingerprint ? this.state.fingerprint : 'No Fingerprint Available'}
            </div>
        );
    }

    componentDidMount()
    {
        let that = this;

        window.console.log(`Fingerprint component mounted`);

        setTimeout(function ()
        {
            let excludes = {
                webgl: false,
            };

            Fingerprint2.getV18({excludes}, function (result) {
                that.setState({fingerprint: result});
            });
        }, 500);
    }

    componentWillUnmount()
    {
        window.console.log(`Fingerprint component will unmount`);
    }
}


export default Fingerprint;