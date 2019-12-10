import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CpadminPage } from './cpadmin.page';

describe('CpadminPage', () => {
  let component: CpadminPage;
  let fixture: ComponentFixture<CpadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CpadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
