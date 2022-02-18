import React from 'react';
import { Titulo, TextoLendarios, ContainerLendarios, GridLendarios, ItemPokemon, ImagemPokemon, PerfilPokemon, NomePokemon, ParagrafoPokemon, GridTexto } from './styles';
import axios from "axios";


// import { Container } from './styles';


interface Ipokemon {
  name: string;
  id: number
}

const Lendarios: React.FC = () => {

  const [articuno, setArticuno] = React.useState<Ipokemon>({ name: "", id: 0 });
  const [zapdos, setZapdos] = React.useState<Ipokemon>({ name: "", id: 0 });
  const [moltres, setMoltres] = React.useState<Ipokemon>({ name: "", id: 0 });

  React.useEffect(() => {
    fetchPokemonLendario("https://pokeapi.co/api/v2/pokemon/144/");
    fetchPokemonLendario("https://pokeapi.co/api/v2/pokemon/145/");
    fetchPokemonLendario("https://pokeapi.co/api/v2/pokemon/146/");
  }, []);

  function fetchPokemonLendario(url: string) {
    axios.get(url)
      .then((response) => {
        if (url == "https://pokeapi.co/api/v2/pokemon/144/") setArticuno(response.data);
        if (url == "https://pokeapi.co/api/v2/pokemon/145/") setZapdos(response.data);
        if (url == "https://pokeapi.co/api/v2/pokemon/146/") setMoltres(response.data);
      })
  }


  return (
    <>
      <Titulo>Os três Pássaros Lendários</Titulo>
      <GridLendarios>
        <ItemPokemon>
          <ImagemPokemon>
            <PerfilPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${articuno.id}.png`} />
          </ImagemPokemon>
          <NomePokemon>
            {articuno.name}
            <div>
              <ParagrafoPokemon>
                {`#${articuno.id}`}
              </ParagrafoPokemon>

            </div>
          </NomePokemon>
        </ItemPokemon>

        <ItemPokemon>
          <ImagemPokemon>
            <PerfilPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${zapdos.id}.png`} />
          </ImagemPokemon>
          <NomePokemon>
            {zapdos.name}
            <div>
              <ParagrafoPokemon>
                {`#${zapdos.id}`}
              </ParagrafoPokemon>
            </div>
          </NomePokemon>
        </ItemPokemon>

        <ItemPokemon>
          <ImagemPokemon>
            <PerfilPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${moltres.id}.png`} />
          </ImagemPokemon>
          <NomePokemon>
            {moltres.name}

            <div>
              <ParagrafoPokemon>
                {`#${moltres.id}`}
              </ParagrafoPokemon>
            </div>
          </NomePokemon>
        </ItemPokemon>

      </GridLendarios>
      <GridTexto>
        <TextoLendarios>Articuno pode controlar o gelo. Dizem que o bater de suas asas arrepia o ar, e que quando este Pokémon voa, a neve cai.</TextoLendarios>

        <TextoLendarios>Zapdos tem a capacidade de controlar a eletricidade. Geralmente vive em nuvens tempestuosas e ganha poder quando é atingido por raios.</TextoLendarios>

        <TextoLendarios>Moltres controla o fogo. Quando Moltres é ferido, diz-se que ele mergulha seu corpo no magma derretido de um vulcão para se queimar e se curar.</TextoLendarios>
      </GridTexto>

    </>
  );
}


export default Lendarios;