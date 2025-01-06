import { TCharacter, TPokemon } from '@/types/character';
import { api } from "./api";

const getCharactersData = async () => {
  try {
    const response = await api.get("/");
    const pokemons = response.data.results;
    
    const detailPromises = pokemons.map((pokemon: { name: string, url: string }) => getPokemonDetail(pokemon.url));
    const pokemonDetails = await Promise.all(detailPromises);
    
    return pokemonDetails;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    return [];
  }
};

function convertPokeApiDetailToPokemon(pokeDetail: TCharacter) {
  const pokemon = {
    id: pokeDetail.id,
    name: pokeDetail.name,
    photo: pokeDetail.sprites.front_default,
  };

  return pokemon;
}

const getPokemonDetail = async (url: string) => {
  try {
    const response = await api.get(url);
    return convertPokeApiDetailToPokemon(response.data);
  } catch (error) {
    console.error("Error fetching Pokémon detail:", error);
    throw error;
  }
};

export async function getStaticProps() {
  const characters: TPokemon[] = await getCharactersData();
  return {
    props: { 
      characters
    },
  };
}

export default getCharactersData;