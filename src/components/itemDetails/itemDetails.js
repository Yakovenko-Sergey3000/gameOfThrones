import React, {Component} from 'react';
import GotService from '../../service/gotService';


import './charDetails.css';
export default class CharDetails extends Component {
    gotService = new GotService();
    

    state = {
        item: null,
        loading: false
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.itemId !== this.props.itemId) {
            this.updateItem()
        }
    }

    updateItem = () => {
        this.setState({loading:true})
        const {itemId} =  this.props;
        if(!itemId) {
            return;
        }

        this.gotService.getCharacter(itemId)
        .then(item => {
            this.setState({item, loading:false})
        })
    }


    render() {

        if(!this.state.item) {
            return (
                <div className="char-details rounded">
                    <h4>Selectet Charter</h4>
                </div>
            )
        }

        if(this.state.loading) {
            return (
                <div className="char-details rounded">
                    <h4>Loading...</h4>
                </div>
            )
        }

        const {name, gender, born,died, culture} = this.state.item;
    
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}