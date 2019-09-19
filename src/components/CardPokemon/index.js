import React, { Component, Fragment } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import './card-pokemon.css'

export default class CardPokemon extends Component {
	constructor(){
		super()

		this.state = {
			pokemonSprites: [],
			height: '',
			weight: ''
		}
	}


	componentDidMount() {
        fetch(this.props.url)
            .then((serverRespond) => serverRespond.json())
            .then((pokemonsFromServer) => {
                this.setState({
					sprites: pokemonsFromServer.sprites.front_default,
					weight: pokemonsFromServer.weight,
					height: pokemonsFromServer.height
                })            
            })                
    }

	render() {
			return (								
			<Fragment>			
				<Card>
					<CardImg top width="100%" src={this.state.sprites} alt="Card image cap" />
					<CardBody>
						<Link to="/pokemon">
							<CardTitle>{this.props.name}</CardTitle>						
							<CardText>Height {this.state.height}</CardText>
							<CardText>Weight {this.state.weight}</CardText>
						</Link>
						<Button outline onClick={this.props.pokemonFavoriteHandler}>Add to favorites</Button>
					</CardBody>
				</Card>				
			</Fragment>
			);
		}
}