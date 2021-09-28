import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccueilcaisseComponent } from './accueilcaisse.component';

describe('AccueilcaisseComponent', () => {
  let component: AccueilcaisseComponent;
  let fixture: ComponentFixture<AccueilcaisseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilcaisseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccueilcaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
