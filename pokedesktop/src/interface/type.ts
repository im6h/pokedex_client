import Base from "./base";

interface TypeDetail {
  id: number;
  name: string;
  pokemon:[
    {
      pokemon: Base,
      slot: number
    }
  ]
}
export default TypeDetail;