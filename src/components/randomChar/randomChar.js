import React, {Component} from 'react';
import './randomChar.css';
import GotService from '../../service/gotService';

export default class RandomChar extends Component {
    gotService = new GotService();

    constructor() {
        super()
        
        this.charId = setInterval(this.updataChar, 4000)
    }

    state = {
        char: null
    }

    componentDidMount() {
        this.updataChar()   
    }

    componentWillUnmount() {
        clearInterval(this.charId)
    }

    
    


    updataChar = () => {
        const id = Math.floor(Math.random() * 130 + 12);
        
        this.gotService.getCharacter(id)
            .then(char => {
                this.setState({char})
            })
    }

    render() {
        
        if(!this.state.char) {
            return <div className="random-block rounded">
                    <h4>Loading...</h4>
            </div>
        }
        const {name, gender, born, died, culture} = this.state.char
        return (
            <div className="random-block rounded">
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}
