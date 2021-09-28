import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccueilvendeurComponent } from './accueilvendeur.component';

describe('AccueilvendeurComponent', () => {
  let component: AccueilvendeurComponent;
  let fixture: ComponentFixture<AccueilvendeurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilvendeurComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccueilvendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
