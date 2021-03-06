import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { PeliculaService } from '../services/pelicula.service';
import { Subscription } from 'rxjs';
import { PeliculaI } from '../models/pelicula.interface';

@Component({
  selector: 'app-peliculasusuario',
  templateUrl: './peliculasusuario.page.html',
  styleUrls: ['./peliculasusuario.page.scss'],
})
export class PeliculasusuarioPage implements OnInit {

  private _someListener: Subscription = new Subscription();
  pelicula: PeliculaI={
    titulo:'',
    imagen:'',
    director:'',
    genero:'',
    anho:0,
  };
  peliculaId=null;

  constructor(
    private route:ActivatedRoute, private nav:NavController,
    private peliculaService:PeliculaService, private loadingController:LoadingController
    ) { }


  ngOnInit(){}

  ionViewWillEnter() {
    console.log('Hola')
    this.peliculaId=this.route.snapshot.params['id'];
    if(this.peliculaId){
      this.loadPelicula();
    }
  }

  ionViewWillLeave(){
    console.log('Adios')
    this._someListener.unsubscribe();
  }

   async loadPelicula(){
    const loading = await this.loadingController.create({
      message:'Cargando...'
    });
    await loading.present();
    this._someListener=this.peliculaService.getPelicula(this.peliculaId).subscribe(res=>{
      loading.dismiss();
      console.log(res);
      this.pelicula=res;
    });
  }

  onRemove(idPelicula:string){
    this.peliculaService.removePelicula(idPelicula);
  }

  addFavoritos(idPelicula:string){
    this.peliculaService.addFavorito(idPelicula,this.pelicula);
  }

}
