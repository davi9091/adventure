import { IItem } from './item';

export interface ICharacter {
  id: number;
  name: string;
  namePrefix: string;
  type: string;
  fraction: string;
  lvl: number;
  hp: number;
  atk: number;
  drop?: IItem[];
  abilities?: IAbility[];
}

export interface IAbility {
  id: number;
  name: string;
  action: () => void;
}