import { Component, OnInit } from '@angular/core';
import {PeliculaI} from '../models/pelicula.interface';
import {ActivatedRoute} from '@angular/router';
import {NavController, LoadingController} from '@ionic/angular';
import { Subscription } from 'rxjs';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  selector: 'app-favorito-details',
  templateUrl: './favorito-details.page.html',
  styleUrls: ['./favorito-details.page.scss'],
})
export class FavoritoDetailsPage implements OnInit {

  private _someListener: Subscription = new Subscription();
  favorito: PeliculaI={
    titulo:'',
    director:'',
    genero:'',
    anho:0,
  };
  favoritoId=null;

  constructor(
    private route:ActivatedRoute, private nav:NavController,
    private favService:PeliculaService, private loadingController:LoadingController
    ) { }

    ngOnInit(){
      
    }

    ionViewWillEnter() {
      this.favoritoId=this.route.snapshot.params['id'];
      console.log('ID FAVORITO: '+this.favoritoId)
      if(this.favoritoId){
        this.loadFavorito();
      }
    }
  
   ionViewWillLeave(){
      console.log('Adios')
      this._someListener.unsubscribe();
      
    }
  
     async loadFavorito(){
      const loading = await this.loadingController.create({
        message:'Cargando...'
      });
      await loading.present();
      this._someListener=this.favService.getFavorito(this.favoritoId).subscribe(res=>{
        loading.dismiss();
        console.log(res);
        this.favorito=res;
      });
    }

  /*onRemove(idPelicula:string){
    this.favService.removeFavorito(idPelicula);
  }*/
}
