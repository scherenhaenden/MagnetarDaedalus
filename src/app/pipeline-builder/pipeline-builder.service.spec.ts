import { TestBed } from '@angular/core/testing';

import { PipelineBuilderService } from './pipeline-builder.service';

describe('PipelineBuilderService', () => {
  let service: PipelineBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipelineBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
