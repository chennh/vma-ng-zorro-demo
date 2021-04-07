import { TestBed } from '@angular/core/testing'

import { FrameGuard } from './frame.guard'

describe('FrameGuard', () => {
  let guard: FrameGuard

  beforeEach(() => {
    TestBed.configureTestingModule({})
    guard = TestBed.inject(FrameGuard)
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })
})
