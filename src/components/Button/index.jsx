import { Component } from 'react'
export class Button extends Component {
    render() {
        const {name, onClick} = this.props;
        return (
            <button onClick={onClick}>
                {name}
            </button>
        )
    }
}