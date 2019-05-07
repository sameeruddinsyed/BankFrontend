import React, { Component } from 'react';
import {connect} from 'react-redux';
import {token} from '../store';

class Home extends Component {
    constructor() {
        super()
        this.state={

        }
        this.direc = this.direc.bind(this);
    }
    componentDidMount() {
        this.props.getToken()
    }

    direc() {
        this.props.history.push(`/signup`)
    }

    render() {
        console.log(this.props.token)
        return (
            <div>
                <h2>Main Page</h2>
                <button onClick={this.direc}>NEXT</button>
            </div>
        )
    }
}

const mapState = state => {
    return {
        token: state.token
    }
}

const mapDispatch = dispatch => {
    return {
        getToken: () => dispatch(token()),
    }
}

export default connect(mapState, mapDispatch)(Home)
