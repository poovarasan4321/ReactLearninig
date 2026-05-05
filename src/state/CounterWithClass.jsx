import React, { Component } from 'react'

export default class CounterWithClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    IncrementCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <div>
                <h1>Counter Demo with Class Based Component</h1>
                <h2>Count:{this.state.count}</h2>
                <button onClick={this.IncrementCount}>IncrementCount</button>
            </div>
        )
    }
}





