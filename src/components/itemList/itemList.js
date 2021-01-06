import React, {Component} from 'react';
import './itemList.css';


export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;
        getData()
        .then(itemList => {
            this.setState({
                itemList
            })
        })  
    }

    

    renderItem(items)  {
        return items.map(item => {
            const {id,name} = item
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onUpdateItemId(id)}>
                        {name}     
                </li>
            )
        })

        
       
    }
    render() {
        const itemList = this.state.itemList? this.renderItem(this.state.itemList) : <li className='list-group-item'>Loading...</li>;
        return (
            <ul className="item-list list-group">
                    {itemList}
            </ul>
        );
    }
}