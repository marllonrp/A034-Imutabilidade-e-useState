import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
function App() {
  const [pokemon1, setPokemon1] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png",
    id: 0,
  });

  const evoluir1pokemon1 = () =>
    setPokemon1({
      ...pokemon1,
      name: "Pikachu",
      evolved: true,
      weight: 6,
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png",
    });
  const evoluir1pokemon2 = () =>
    setPokemon1({
      ...pokemon1,
      name: "Raichu",
      evolved: true,
      weight: 30,
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/8/88/026Raichu.png/250px-026Raichu.png",
    });
  // Para fazer seus próximos pokemons, crie novos estados!

  const [pokemon2, setPokemon2] = useState({
    name: "Bulbasaur",
    type: "Grass, Poison",
    evolved: false,
    weight: 6,
    color: "green",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png",
    id: 0,
  });

  const evoluir2pokemon1 = () =>
    setPokemon2({
      ...pokemon2,
      name: "Ivysaur",
      evolved: true,
      weight: 13,
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png",
    });
  const evoluir2pokemon2 = () =>
    setPokemon2({
      ...pokemon2,
      name: "Venusaur",
      evolved: true,
      weight: 100,
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png",
    });

  const [pokemon3, setPokemon3] = useState({
    name: "Charmander",
    type: "Fire",
    evolved: false,
    weight: 8,
    color: "red",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png",
    id: 0,
  });

  const evoluir3pokemon1 = () =>
    setPokemon3({
      ...pokemon3,
      name: "Charmeleon",
      evolved: true,
      weight: 19,
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png",
    });
  const evoluir3pokemon2 = () =>
    setPokemon3({
      ...pokemon3,
      name: "Charizard",
      evolved: true,
      weight: 90,
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png",
    });

    const [pokemon4, setPokemon4] = useState({
      name: "Squirtle",
      type: "Water",
      evolved: false,
      weight: 9,
      color: "blue",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png",
      id: 0,
    });
  
    const evoluir4pokemon1 = () =>
      setPokemon4({
        ...pokemon4,
        name: "Wartortle",
        evolved: true,
        weight: 22,
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png",
      });


    const evoluir4pokemon2 = () =>
      setPokemon4({
        ...pokemon4,
        name: "Blastoise",
        evolved: true,
        weight: 85,
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png",
      });

    
  return (
    <>
      <GlobalStyles />
      <FlexContainer >
        
        <PokemonCard
          Card={pokemon1}
          evoluir1={evoluir1pokemon1}
          evoluir2={evoluir1pokemon2}/>

     
        <PokemonCard
          Card={pokemon2}
          evoluir1={evoluir2pokemon1}
          evoluir2={evoluir2pokemon2}/>
  
        
        <PokemonCard
          Card={pokemon3}
          evoluir1={evoluir3pokemon1}
          evoluir2={evoluir3pokemon2}/>
     
        
        <PokemonCard
          Card={pokemon4}
          evoluir1={evoluir4pokemon1}
          evoluir2={evoluir4pokemon2}
        />
      </FlexContainer>
    </>
  );
}

export default App;
