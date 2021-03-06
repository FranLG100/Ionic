import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate:[AuthGuard]},
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'peliculas/:id',
    loadChildren: () => import('./pelicula-details/pelicula-details.module').then( m => m.PeliculaDetailsPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'peliculas',
    loadChildren: () => import('./pelicula-details/pelicula-details.module').then( m => m.PeliculaDetailsPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'favoritos/:id',
    loadChildren: () => import('./favorito-details/favorito-details.module').then( m => m.FavoritoDetailsPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'cpadmin',
    loadChildren: () => import('./cpadmin/cpadmin.module').then( m => m.CpadminPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'peliculasusuario/:id',
    loadChildren: () => import('./peliculasusuario/peliculasusuario.module').then( m => m.PeliculasusuarioPageModule), canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
