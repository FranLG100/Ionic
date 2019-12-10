import { Component, OnInit } from '@angular/core';
import {PeliculaI} from '../models/pelicula.interface';
import {PeliculaService} from '../services/pelicula.service';
import {NavController, LoadingController} from '@ionic/angular';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../services/auth.service';
import { AdminI } from '../models/administrador.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  peliculas:PeliculaI[];
  usuarios:AdminI[];
  permiso:number;
  private _someListener: Subscription = new Subscription();
  private _someListenerTwo: Subscription = new Subscription();

  constructor(private peliculaService:PeliculaService,private nav:NavController, private router:Router, private afAuth:AngularFireAuth) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    
    console.log('PELICULAS: ',this.peliculas)
    this._someListener=this.peliculaService.getPeliculas().subscribe(res=>{
      this.peliculas=res;
      console.log('respuesta',res);
    },
    err=>{console.log(err)})

    console.log('Usuarios: ',this.usuarios)
    this._someListenerTwo=this.peliculaService.getPermiso().subscribe(res=>{
      this.usuarios=res;
      this.permiso=res.length;
      console.log('respuesta de usuarios',res.length);
    },
    err=>{console.log(err)})
  }

  ionViewWillLeave(){
    console.log('Me desuscribo')
    this._someListener.unsubscribe();
    this._someListenerTwo.unsubscribe();
  }

  irFavoritos() {
    this.nav.navigateForward('/favoritos');
  }

  onLogout(){
    console.log('Logout');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
    window.location.reload();
  }

  onRemove(idPelicula:string){
    this.peliculaService.removePelicula(idPelicula);
  }

  refrescarPagina(){
    window.location.reload();
  }

  

}
