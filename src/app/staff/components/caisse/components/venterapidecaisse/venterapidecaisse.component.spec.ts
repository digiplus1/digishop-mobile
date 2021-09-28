import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VenterapidecaisseComponent } from './venterapidecaisse.component';

describe('VenterapidecaisseComponent', () => {
  let component: VenterapidecaisseComponent;
  let fixture: ComponentFixture<VenterapidecaisseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VenterapidecaisseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VenterapidecaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
