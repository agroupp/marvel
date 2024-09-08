import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesInfraComponent } from './features-infra.component';

describe('FeaturesInfraComponent', () => {
  let component: FeaturesInfraComponent;
  let fixture: ComponentFixture<FeaturesInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesInfraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturesInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
