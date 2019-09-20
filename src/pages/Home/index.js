import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { CardColumns } from 'reactstrap';  
import Header from '../../components/Header'
import PokemonFavorite from '../../components/FavoritePokemon'
import CardPokemon from '../../components/CardPokemon';

import { connect } from 'react-redux';

class Home extends Component {

    state = {
        pokemons: [],
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

    pokemonFavorited = pokemon => {
        const { dispatch } = this.props
        
        dispatch({
            type: 'ADD_TO_FAVORITE',
            pokemon
        })
    }     

    render() {

        const { pokemons } = this.state

      return ( 
          
        <Fragment>
            <Header/>

            <Container>
                <Row>
                    <Col xl="3" md="4" sm="12">
                        <PokemonFavorite />
                    </Col>
                    <Col xl="9" md="8" sm="12">
                        <CardColumns>
                            {                                       
                                    this.state.pokemons.map((pokemon, indice) => {
                                        return <CardPokemon 
                                        id = {indice + 1}
                                        key={indice}
                                        url={pokemon.url}
                                        name={pokemon.name} 
                                        photo={pokemon.sprites}
                                        pokemonFavoriteHandler={() => {this.pokemonFavorited(pokemon)}}/>
                                    })                        
                                
                            }
                        </CardColumns>                                                                  
                    </Col>
                </Row>
            </Container>
        </Fragment>
        );
    }
}

export default connect()(Home);