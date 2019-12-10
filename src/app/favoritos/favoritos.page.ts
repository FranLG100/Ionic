import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {PeliculaI} from '../models/pelicula.interface';
import {PeliculaService} from '../services/pelicula.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {NavController, LoadingController, Events} from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  favoritos:PeliculaI[];
  private _someListener: Subscription;

  constructor(private changeRef: ChangeDetectorRef, private favoritosService:PeliculaService, private afAuth: AngularFireAuth, private nav:NavController) { }

  ngOnInit() {
    //console.log('ENTRO EN FAVORITOS')
    //this._someListener=this.favoritosService.getFavoritos().subscribe(res=>{
    //  this.favoritos=res;
    //  console.log(res);
    //},
   //err=>{console.log(err)})
  }
  
  

  ionViewWillEnter(){
    console.log('ENTRO EN FAVORITOS ',this._someListener)
    this.favoritos=[];
    this._someListener=this.favoritosService.getFavoritos().subscribe(res=>{
      this.favoritos=res;
    },
    err=>{console.log(err)},
    )
  }

  ionViewDidLeave(){
    this._someListener.unsubscribe();
  }

  onRemoveFav(id:string){
    console.log(id);
    this.favoritosService.removeFavorito(id);
  }

}
