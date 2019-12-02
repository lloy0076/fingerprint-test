import React from 'react';
import moment from 'moment';

class Time extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            time: moment(),
        };
    }
    render()
    {
        return (
            <div>
                {this.state.time.format("hh:mm:ss")}
            </div>
        );
    }

    componentDidMount()
    {
        window.console.log(`Time component mounted`);

        let that = this;
        window.console.log(`componentDidMount in Time.js`);

        this.timerId = setInterval(function ()
        {
            that.setState({time: moment()});
        }, 1000);
    }

    componentWillUnmount()
    {
        window.console.log(`Time component will unmount`);
        clearInterval(this.timerId);
    }
}

export default Time;