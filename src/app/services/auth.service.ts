import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../shared/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //public isLogged : any=false;
  constructor(public afAuth: AngularFireAuth) { 
    //afAuth.authState.subscribe( user=>(this.isLogged=user));
  }

  //login
  onLogin(user:User){
    return new Promise((resolve, rejected)=>{
      this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password).then(user=>{
      resolve(user)
    }).catch(err=>rejected(err) )})
    
    /*
    try{
      return await this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=>{return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)});
    }catch(error){
      console.log('Error en el login: ', error);
    }*/
  }

  //registrarse
  async onRegister(user:User){
    try{

      return await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
    }catch(error){
      console.log('Error en el registro: ', error);
    }
  }

  userDetails(){
    return this.afAuth.auth.currentUser.email;
  }
}

