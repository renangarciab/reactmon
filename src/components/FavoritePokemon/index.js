import React from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';  
import { connect } from 'react-redux'
 
function PokemonFavorite({pokemons}) {
    console.log(pokemons)
    return (        
        <Card>
        <CardHeader>Favorites</CardHeader>
            <CardBody>
            <CardText>{pokemons.name}</CardText>
            {         
                pokemons.length > 0 &&       
                pokemons.map((pokemon, indice) => {                    
                    <CardText key={indice}>{pokemon.name}</CardText>                    
                })                               
            }
            </CardBody>
        </Card>
    );
}


export default connect(state => ({
    pokemons: state.favorite,
}))(PokemonFavorite)