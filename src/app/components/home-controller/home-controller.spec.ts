import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeController } from './home-controller';

describe('HomeController', () => {
  let component: HomeController;
  let fixture: ComponentFixture<HomeController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeController]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeController);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
