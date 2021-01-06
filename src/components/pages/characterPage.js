import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import GotService from '../../service/gotService';


export default class CharacterPage extends Component {
    gotService = new GotService();

    state ={
        itemId: null
    }


    onUpdateItemId = (id) => {
        
        this.setState({
            itemId: id
        })
    }
    render() {

        return(
            <Row>
                <Col md='6'>
                    <ItemList onUpdateItemId={this.onUpdateItemId} getData={this.gotService.getAllCharacters}/>
                </Col>
                <Col md='6'>
                    <ItemDetails itemId={this.state.itemId}/>
                </Col>
            </Row> 
        )
    }
}