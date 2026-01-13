import { TestBed } from '@angular/core/testing';

import { JobList } from './job-list';

describe('JobList', () => {
  let service: JobList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
