import {action, observable} from "mobx";
import {createContext} from "react";
import moveApi from "../service/move";

class MoveStore {

}

export default createContext(new MoveStore())