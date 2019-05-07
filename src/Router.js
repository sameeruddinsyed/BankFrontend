import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import {
    Home,
    Signup,
    Bank
} from './component';
import {loggin} from './store';

class Routes extends Component {
    // componentDidMount() {
    //     this.props.getUser()
    // }

    render() {
        const {isLoggedIn} = this.props
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                {
                    isLoggedIn ? (
                        <Switch>
                            <Route path="/signup" component={Signup}/>
                            <Route path="/bank" component={Bank}/>
                        </Switch>

                    ) : <Redirect to="/"/>
                }
            </Switch>
        )
    }
}

const mapState = state => {
    return {
        isLoggedIn: true,
        isAdmin: true,
        username: state.user,
    }
}

const mapDispatch = dispatch => {
    return {
        getUser: () => dispatch(loggin()),
    }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))