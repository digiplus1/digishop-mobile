import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsRapportFermetureGlobalComponent } from './details-rapport-fermeture-global.component';

describe('DetailsRapportFermetureGlobalComponent', () => {
  let component: DetailsRapportFermetureGlobalComponent;
  let fixture: ComponentFixture<DetailsRapportFermetureGlobalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsRapportFermetureGlobalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsRapportFermetureGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
