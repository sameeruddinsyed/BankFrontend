import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';

export default class Bank extends Component {
    constructor() {
        super()
        this.state={
            balance: 0,
            amount: 0
        }
        this.inputAmount = this.inputAmount.bind(this);
        this.moneyTransfer = this.moneyTransfer.bind(this);
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

    render() {
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
                    </div>
                </div>
            </div>
        )
    }
}