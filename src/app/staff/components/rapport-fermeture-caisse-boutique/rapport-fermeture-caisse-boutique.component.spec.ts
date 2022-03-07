import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RapportFermetureCaisseBoutiqueComponent } from './rapport-fermeture-caisse-boutique.component';

describe('RapportFermetureCaisseBoutiqueComponent', () => {
  let component: RapportFermetureCaisseBoutiqueComponent;
  let fixture: ComponentFixture<RapportFermetureCaisseBoutiqueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportFermetureCaisseBoutiqueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RapportFermetureCaisseBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
