import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';
import axios from 'axios';
import {connect} from 'react-redux';
import store from '../store';

class Bank extends Component {
    constructor() {
        super()
        this.state={
            balance: 0,
            amount: 0
        }
        this.inputAmount = this.inputAmount.bind(this);
        this.moneyTransfer = this.moneyTransfer.bind(this);
        this.direc = this.direc.bind(this);
    }

    componentDidMount() {
        // axios.post('http://10.148.53.27:8083/register',{
        //     email: "email@email.com",
        //     firstName: "Minkyu",
        //     lastName: "yang",
        //     password: "1234",
        //     ssn: "1234",
        //     type: 1
        // })
        // .then(res=>{
        //     console.log(res.data)
        // })
    }

    moneyTransfer(evt) {
        const action = evt.target.value;
        if (action === "deposit") {
            this.setState({
                balance: this.state.balance + this.state.amount
            })
        } else if (action === "withdraw") {
            if (this.state.balance >= this.state.amount) {
                this.setState({
                    balance: this.state.balance - this.state.amount
                })
            } else {
                alert("not enought balance")
            }
        }
    }

    inputAmount(evt, amount, float) {
        this.setState({
            amount
        })
    }

    direc() {
        this.props.history.push(`/signup`)
    }

    render() {
        console.log(this.props.token)
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h2>Bank Page</h2>
                    </div>
                    <div className="card-body">
                        <p>Balance: $ {this.state.balance}.00</p>
                        <div className="form-group" style={{display: "flex", justifyContent: "flex-start"}}>
                            <div className="input-group-prepend">
                                <span className="input-group-text">Amount:</span>
                            </div>
                            <CurrencyInput className="form-control col-md-2" prefix="$ " precision="0" onChange={this.inputAmount} value={this.state.amount}/>
                        </div>
                        <button className="btn btn-info" id="transferButton" onClick={this.moneyTransfer} value="deposit">DEPOSIT</button>
                        <button className="btn btn-danger" id="transferButton" onClick={this.moneyTransfer} value="withdraw">WITHDRAW</button>
                        <button onClick={this.direc}>Click</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = () => {
    return {
        token: store.getState().token
    }
}


export default connect(mapState)(Bank)