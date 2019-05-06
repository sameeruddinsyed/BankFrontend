import React, { Component } from 'react';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div class="container">
                <form class="form-signin">
                    <h2>Main Page</h2>
                    <input type="text" class="form-control" name="username" placeholder="Email Address" required="true" autofocus="" />
                    <input type="password" class="form-control" name="password" placeholder="Password" required="true"/>
                    <label class="checkbox">
                        <input type="checkbox" value="remember me" id="rememberMe" name="rememberMe"/> Remember Me
                    </label>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                </form>
            </div>
        )
    }
}