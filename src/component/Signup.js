import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../store';

class Signup extends Component {
    constructor() {
        super()
        this.state={

        }
        this.direc = this.direc.bind(this);
    }

    direc() {
        this.props.history.push(`/signup`)
    }

    render() {
        console.log(this.props.token)
        return (
            <div>
                <h2>Sign-up Page</h2>
                <button onClick={this.direc}>NEXT</button>
            </div>
        )
    }
}

const mapState = () => {
    return {
        token: store.getState().token
    }
}


export default connect(mapState)(Signup)