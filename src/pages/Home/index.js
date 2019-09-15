import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Card, CardHeader, CardBody, CardText, CardColumns } from 'reactstrap';  
import CardPokemon from '../../components/CardPokemon';

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            pokemon: '',
            pokemons: [],
            pokemonActive: []
        }
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

    pokemonFavorited = (pokemonIdFavorited) => {
        const pokemonFavorited = this.state.pokemons.find((pokemon) => {            
            return pokemon.name === pokemonIdFavorited
        })
        
        this.setState({
            pokemonActive: [{name:pokemonFavorited.name} , ...this.state.pokemonActive]
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
                    <Col xl="3" md="4" sm="12">
                        <Card>
                            <CardHeader>Favorites</CardHeader>
                            <CardBody>
                            {
                                this.state.pokemonActive.length < 11 &&
                                this.state.pokemonActive.map((pokemon, indice) => {
                                    
                                    return <CardText key={indice}>{pokemon.name}</CardText>                                
                                })                               
                            }
                            </CardBody>
                        </Card>            
                    </Col>
                    <Col xl="9" md="8" sm="12">
                        <CardColumns>
                            {                                                                     
                                this.state.pokemons.length > 0 ?
                                    this.state.pokemons.map((pokemon, indice) => {
                                        return <CardPokemon 
                                        id = {indice + 1}
                                        key={indice}
                                        url={pokemon.url}
                                        name={pokemon.name} 
                                        photo={pokemon.sprites}
                                        pokemonFavoriteHandler={() => {this.pokemonFavorited(pokemon.name)}}/>
                                    })
                                : <p>Wait</p>                         
                                
                            }
                        </CardColumns>                                                                  
                    </Col>
                </Row>
            </Container>
        </Fragment>
        );
    }
}