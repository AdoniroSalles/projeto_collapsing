import { TestBed } from '@angular/core/testing';

import { SharedBooksService } from './shared-books.service';

describe('SharedBooksService', () => {
  let service: SharedBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
