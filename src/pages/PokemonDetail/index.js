import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Card, CardHeader, CardBody, CardText, CardColumns } from 'reactstrap';  

export default class Home extends Component {
    constructor() {
        super()
        
    }
    
    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then((serverRespond) => serverRespond.json())
            .then((pokemonsFromServer) => {
                this.setState({
                    pokemons: pokemonsFromServer.results
                })            
            })
    }

    render() {
      return ( 
          
        <Fragment>
            <Jumbotron>
                <h1 className="display-3">Reactmon</h1>
            </Jumbotron>

            <Container>
                <Row>
                    
                </Row>
            </Container>
        </Fragment>
        );
    }
}