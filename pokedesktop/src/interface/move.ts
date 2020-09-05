import Base from "./base";

export default interface Move {
  id: number;
  name: string;
  accuracy: number;
  power: number;
  type: Base;
}