import React from 'react';
import { Jumbotron } from 'reactstrap';
import { connect } from 'react-redux'
 
function Header({pokemon}) {    

    return (        
    <Jumbotron>
        <h1 className="display-3">Reactmon</h1>

        <div>Favorites: {pokemon.length}</div>
        
    </Jumbotron>
    );
}


export default connect(state => ({
    pokemon: state.favorite,
}))(Header)