import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeNavigationComponent } from './recipe-navigation.component';

describe('RecipeNavigationComponent', () => {
  let component: RecipeNavigationComponent;
  let fixture: ComponentFixture<RecipeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
