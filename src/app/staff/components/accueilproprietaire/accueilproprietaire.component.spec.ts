import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccueilproprietaireComponent } from './accueilproprietaire.component';

describe('AccueilproprietaireComponent', () => {
  let component: AccueilproprietaireComponent;
  let fixture: ComponentFixture<AccueilproprietaireComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilproprietaireComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccueilproprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
