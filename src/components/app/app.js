import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import { CharacterPage } from '../pages';
import RandomChar from '../randomChar';



export default class  App extends Component{
    state ={ 
        randomChar: false,
        
    }


    clickBtn = () => {
        this.setState(({randomChar}) => {
            return {
                randomChar: !randomChar
            }
        })
    }

   




    render() {

        
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {this.state.randomChar? <RandomChar/> : null}  
                        </Col>
                    </Row>

                    <button className='btn-random'
                        onClick={this.clickBtn}>
                        Random Char
                    </button>
                    <CharacterPage/>
                    <CharacterPage/>
                    <CharacterPage/>
                    
                </Container>
            </>
        );
    }
};

