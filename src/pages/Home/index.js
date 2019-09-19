import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Card, CardHeader, CardBody, CardText, CardColumns } from 'reactstrap';  
import CardPokemon from '../../components/CardPokemon';

import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/PokemonsActions';

import ProtoType from 'prop-types'

class Home extends Component {
   
    componentDidMount() { 

        this.props.fetchData('https://pokeapi.co/api/v2/pokemon/');
    }

    pokemonFavorited = (pokemonIdFavorited) => {
        
        const pokemonFavorited = this.props.pokemons.find((pokemon) => {                        
            return pokemon.name === pokemonIdFavorited
        })
        
         this.setState({
            pokemonActive: [{name:pokemonFavorited.name} , ...this.props.pokemonActive]
         })
    }     

    render() {

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
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
                                this.props.pokemonActive.length < 11 &&
                                this.props.pokemonActive.map((pokemon, indice) => {
                                    
                                    return <CardText key={indice}>{pokemon.name}</CardText>                                
                                 })                               
                            }
                            </CardBody>
                        </Card>            
                    </Col>
                    <Col xl="9" md="8" sm="12">
                        <CardColumns>
                            {                                       
                                    this.props.pokemons.map((pokemon, indice) => {
                                        return <CardPokemon 
                                        id = {indice + 1}
                                        key={indice}
                                        url={pokemon.url}
                                        name={pokemon.name} 
                                        photo={pokemon.sprites}
                                        pokemonFavoriteHandler={() => {this.pokemonFavorited(pokemon.name)}}/>
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

const mapStateToProps = (state) => {
    return {
        pokemons: state.items,
        pokemon: '',
        pokemonActive: [],
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);