import React, {Component, useState} from "react";
import './Clock.scss';

class Clock extends Component {
    constructor(){
        super();
        this.state = {
            time: new Date()    //sets initial state with time
        };
    }

    currentTime() {
        this.setState({ time: new Date()});
    }

    componentDidMount() {    //updates the currentTime every 1second
        this.interval = setInterval( ()=> this.currentTime(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);    ///clears interval
    }

    render() {
        return (
            <>
                <div className="Clock">
                    <h2 className="time" id="time"> {this.state.time.toLocaleTimeString()} </h2>
                </div>
            </>
        );
    }

}

export default Clock;