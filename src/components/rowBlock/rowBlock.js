import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList'
import CharDetails from '../charDetails';

export default class RowBlock extends Component {

    state = {
        char: null
    }

    componentDidMount() {
        this.renderItem()
    }

    renderItem = () => {
        const {getData} = this.props;
        getData()
            .then(char => {
                this.setState({char})
            })
    }
    

    render() {
        console.log(this.state.char);

        const itemList = (
            <ItemList/>
        )
            
        const charDetails  = (
            <CharDetails />
        )
        return(
            <>
           
        </>
        )
    }
}