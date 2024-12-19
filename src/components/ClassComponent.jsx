import { Component } from 'react'

class ClassComponent extends Component {
    constructor() {
        super()
        this.state = {
            contador: 0
        }
    }
    
    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <h3>
                    <button onClick={() => this.setState({contador: this.state.contador - 1})} >-</button>
                    {this.state.contador}
                    <button onClick={() => this.setState({ contador: this.state.contador + 1 })} >+</button>
                </h3>
            </div>
        )
    }
}

export default ClassComponent