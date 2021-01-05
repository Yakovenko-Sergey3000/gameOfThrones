import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import GotService from '../../service/gotService';
import ItemList from '../itemList'
import CharDetails from '../charDetails'

export default class Charecters extends Component {
    gotService = new GotService();


    render() {
        return (
         <>
            <Row>
                <Col md='6'>
                    <ItemList />
                </Col>
                <Col md='6'>
                    <CharDetails />
                </Col>
            </Row> 
         </>
        )
    }
}

 