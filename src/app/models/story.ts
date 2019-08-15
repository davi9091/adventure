import { ICharacter } from './character';
import { IItem } from './item';

export interface IStory {
  id: number;
  name: string;
  text: string;
  exitRoutes: IRoute[];
  characters?: ICharacter[];
  items?: IItem[];
}

export interface IRawStory {
  id: number; // same as StoryId
  name: string;
  text: string;
  entities: any[];
}

export interface IRoute {
  id: number;
  parentStoryId: number;
  targetStoryId: number;
  energy: number; // The energy needed to get from parent to target story
  events: IRouteEvent[]; // any event that could happen during travel
}

export interface IRouteEvent {
  id: number;
  chance: number;
}

export interface IQuest {
  id: number;
  storyId: number;
  name: string;

  text: string;
  isFinished: boolean;

  questEnder: ICharacter;
  questGiver?: ICharacter;
  questCharacters: ICharacter[];

  rewardItems: IItem[];
  rewardExp: number;
}
