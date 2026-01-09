import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoMapController } from './photo-map-controller';

describe('PhotoMapController', () => {
  let component: PhotoMapController;
  let fixture: ComponentFixture<PhotoMapController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoMapController]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoMapController);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
