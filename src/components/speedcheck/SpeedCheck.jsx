import React, { Component } from 'react';
import Info from './Info.jsx';
import ChallengeInput from './ChallengeInput'
import Score from './Score'
const initState = {
    result: null
}

class SpeedCheck extends Component {
    challenge = "Hello React";
    state = initState;

    setResult = (result) => {
        this.setState({
            result
        })
    }
    render() {
        console.log(this.state);
        const {result} = this.state;
        return (
            <React.Fragment>
                <Info challenge={this.challenge} />
                <hr />
                <ChallengeInput challenge={this.challenge} setResult={this.setResult}/>
                <hr />
                {result !== null ? <Score score={this.state.result} /> : ""}
            </React.Fragment>
        );
    }
}


export default SpeedCheck;