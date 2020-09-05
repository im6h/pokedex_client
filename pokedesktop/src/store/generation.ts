import {action, observable} from "mobx";
import {createContext} from 'react'
import generationApi from "../service/generation";

class GenerationStore {}
export default createContext(new GenerationStore())