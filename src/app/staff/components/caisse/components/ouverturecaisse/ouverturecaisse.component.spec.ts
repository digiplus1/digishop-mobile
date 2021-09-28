import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OuverturecaisseComponent } from './ouverturecaisse.component';

describe('OuverturecaisseComponent', () => {
  let component: OuverturecaisseComponent;
  let fixture: ComponentFixture<OuverturecaisseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OuverturecaisseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OuverturecaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
