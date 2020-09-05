import {action, observable} from "mobx";
import {createContext} from "react";
import evolutionApi from "../service/evolution";

class EvolutionStore{}
export default createContext(new EvolutionStore())