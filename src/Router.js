import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    Home,
    Signup,
    Bank
} from './component';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/bank" component={Bank}/>
            </Switch>
        )
    }
}