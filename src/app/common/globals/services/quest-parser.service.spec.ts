import { TestBed } from '@angular/core/testing';

import { QuestParserService } from './quest-parser.service';

describe('QuestParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestParserService = TestBed.get(QuestParserService);
    expect(service).toBeTruthy();
  });
});
