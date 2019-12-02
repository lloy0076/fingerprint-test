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