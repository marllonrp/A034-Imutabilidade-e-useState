import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = (props) => {

    const evoluirPokemon = () => {
        console.log("Cliquei no botão de evoluir")
       if (props.Card.evolved === false){
        props.evoluir1()
       }else {
        props.evoluir2()
       }
    }
  
  return (
    <Card color={props.Card.color}>
        <img src={props.Card.image} alt={`Pokemon`}/>
        <PokemonName>{props.Card.name}</PokemonName>
        <PokemonType>{props.Card.type}</PokemonType>
        <p>{props.Card.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard