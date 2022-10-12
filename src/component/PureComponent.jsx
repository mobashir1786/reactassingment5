// import React, { Component } from "react";
import { PureComponent } from "react";

export default class PureComponent123 extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    componentDidUpdate() {
        console.log("updated");
    }
    render() {
        return (
            <>
                <div className='center'>
                    <h1>This is Pure Component</h1>
                    <h1>counter:{this.state.count}</h1>
                    <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>count</button>
                </div>
            </>
        )
    }
}