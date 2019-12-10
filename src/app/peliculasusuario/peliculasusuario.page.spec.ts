import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeliculasusuarioPage } from './peliculasusuario.page';

describe('PeliculasusuarioPage', () => {
  let component: PeliculasusuarioPage;
  let fixture: ComponentFixture<PeliculasusuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasusuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeliculasusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
