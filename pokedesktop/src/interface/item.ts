import Base from "./base";

export default interface Item {
  id: number;
  name: string;
  cost: number;
  effect_entries: [
    {
      effect: string;
      language: Base;
      short_effect: string;
    }
  ];
  flavor_text_entries: [
    {
      text: string;
      language: Base;
      version_group: Base;
    }
  ];
  category: Base;
  attributes: Base[];
}
