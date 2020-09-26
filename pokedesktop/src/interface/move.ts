import Base from "./base";

export default interface Move {
  id: number;
  name: string;
  accuracy: number;
  power: number;
  type: Base;
  pp: number;
  flavor_text_entries: [
    {
      flavor_text: string;
      language: Base;
      version: Base;
    },
  ];
}