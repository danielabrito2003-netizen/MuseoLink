import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishSiteComponent } from './english-site.component';

describe('EnglishSiteComponent', () => {
  let component: EnglishSiteComponent;
  let fixture: ComponentFixture<EnglishSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnglishSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnglishSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
