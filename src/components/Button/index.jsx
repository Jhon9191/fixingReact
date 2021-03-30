import { Component } from 'react'
import './styles.css'
export class Button extends Component {
    render() {
        const {name, onClick, disabled} = this.props;
        return (
            <button 
            disabled={disabled}
            className="buttonStyle" 
            onClick={onClick}>
                {name}
            </button>
        )
    }
}