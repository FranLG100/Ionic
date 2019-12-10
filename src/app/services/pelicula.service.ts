import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PeliculaI} from '../models/pelicula.interface';
import {AuthService} from '../services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { AdminI } from '../models/administrador.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private peliculasCollection: AngularFirestoreCollection<PeliculaI>;
  private peliculas:Observable<PeliculaI[]>;
  private favoritosCollection: AngularFirestoreCollection<PeliculaI>;
  private favoritos:Observable<PeliculaI[]>;
  private usuariosCollection: AngularFirestoreCollection<AdminI>;
  private usuario: Observable<AdminI[]>;

  constructor(db:AngularFirestore,private afAuth: AngularFireAuth) {
    this.peliculasCollection=db.collection<PeliculaI>('peliculas');
    this.peliculas=this.peliculasCollection.snapshotChanges().pipe(map(
      actions=>{
        return actions.map(a=>{
          const data=a.payload.doc.data();
          const id=a.payload.doc.id;
          return{id, ...data};
        })
      }
    ))

    this.favoritosCollection=db.collection('favoritos').doc(afAuth.auth.currentUser.uid).collection<PeliculaI>('peliculas');
    this.favoritos=this.favoritosCollection.snapshotChanges().pipe(map(
      actions=>{
        return actions.map(a=>{
          const data=a.payload.doc.data();
          const id=a.payload.doc.id;
          return{id, ...data};
        })
      }
    ))

    this.usuariosCollection=db.collection('usuarios').doc(afAuth.auth.currentUser.uid).collection<AdminI>('permisos');
    this.usuario=this.usuariosCollection.snapshotChanges().pipe(map(
      actions=>{
        return actions.map(a=>{
          const data=a.payload.doc.data();
          const id=a.payload.doc.id;
          return{id, ...data};
        })
      }
    ))
  }

  //collection('favoritos').doc(currentUser)

  getPeliculas(){
    return this.peliculas;
  }

  getPelicula(id:string){
    return this.peliculasCollection.doc<PeliculaI>(id).valueChanges();
  }

  updatePelicula(pelicula:PeliculaI, id:string){
    return this.peliculasCollection.doc(id).update(pelicula);
  }

  addPelicula(pelicula:PeliculaI){
    return this.peliculasCollection.add(pelicula);
  }

  removePelicula(id:string){
    return this.peliculasCollection.doc(id).delete();
  }

  getFavoritos(){
    return this.favoritos;
  }

  getFavorito(id:string){
    return this.favoritosCollection.doc<PeliculaI>(id).valueChanges();
  }

  addFavorito(id:string,pelicula:PeliculaI){
    return this.favoritosCollection.doc<PeliculaI>(id).set(pelicula);
  }

  removeFavorito(id:string){
    return this.favoritosCollection.doc(id).delete();
  }

  getPermiso(){
    return this.usuario;
  }

}
