import {action, observable} from "mobx";
import {createContext} from 'react'
import pokemonApi from "../service/pokemon";

class PokemonStore {

}

export default createContext(new PokemonStore())
