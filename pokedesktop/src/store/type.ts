import {action, observable} from 'mobx'
import {createContext} from "react";
import typeApi from "../service/type";

class TypeStore {

}

export default createContext(new TypeStore());
