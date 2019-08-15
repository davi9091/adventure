import { Injectable } from '@angular/core';
import { IStory, IRawStory } from 'src/app/models/story';

@Injectable({
  providedIn: 'root'
})
export class QuestParserService {

  constructor() { }

  public parseStory(rawStory: IRawStory): IStory {
    const entityArr = [];
    const storyTxt = rawStory.text;
    const rawStoryArr = storyTxt.split('!');

    const story: IStory = {
      id: rawStory.id,
      text: '',
      name: rawStory.name,
      exitRoutes: [],
    };

    for (let i = 0; i < rawStoryArr.length; ++i) {
      // Each second element in an array will be an unique id of entity
      if (i % 2 === 0) {
        entityArr.push(rawStoryArr[i]);

        // TODO make a function that creates an entity like one in forEach
      }
    }

    rawStory.entities.forEach(value => {
      switch (value.type) {
        case 'route': {
          delete value.type;
          story.exitRoutes.push(value);
          break;
        }
        case 'item': {
          delete value.type;
          story.items.push(value);
          break;
        }
        case 'character': {
          delete value.type;
          story.characters.push(value);
          break;
        }
        default: {
          throw new Error('unrecognized entity type');
        }
      }
    });

    return story;
  }
}
