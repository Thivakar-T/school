import { TestBed } from '@angular/core/testing';
import { WorkerService } from './workerservice.service';

describe('WorkerserviceService', () => {
  let service: WorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
