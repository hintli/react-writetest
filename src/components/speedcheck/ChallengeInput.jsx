import React from 'react'

class ChallengeInput extends React.Component {
    state = {
        entry:''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state.entry)
    }

    resetState = () => {
        this.setState({
            entry: ""
        })
    }

    render() {
        return (
            <div className="input-group mb-3">
                        <input type="text" className="form-control" name="entry" value={this.state.entry} onChange={this.changeHandler} placeholder="Metni giriniz" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" onClick={this.resetState} type="button" id="reset">sıfırla</button>
                        </div>
            </div>
        )
    }
}

export default ChallengeInput;