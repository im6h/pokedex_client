import Base from './base';

export type Ability = {
  id: number;
  name: string;
  pokemon: [
    {
      pokemon: Base;
      slot: number;
    },
  ];
  generation: Base;
  flavor_text_entries: [
    {
      flavor_text: string;
      language: Base;
      version_group: Base;
    },
  ];
};

export const abilityInstance: Ability = {
  id: 0,
  name: '',
  pokemon: [
    {
      pokemon: {
        name: '',
        url: '',
      },
      slot: 0,
    },
  ],
  generation: {
    name: '',
    url: '',
  },
  flavor_text_entries: [
    {
      flavor_text: '',
      language: {
        name: '',
        url: '',
      },
      version_group: {
        name: '',
        url: '',
      },
    },
  ],
};
