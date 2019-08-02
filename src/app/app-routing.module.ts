import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'calendario',
    loadChildren: './pages/calendario/calendario.module#CalendarioPageModule'
  },  { path: 'agregar-evento', loadChildren: './pages/agregar-evento/agregar-evento.module#AgregarEventoPageModule' },
  { path: 'secciones', loadChildren: './pages/secciones/secciones.module#SeccionesPageModule' },
  { path: 'calculadora', loadChildren: './pages/calculadora/calculadora.module#CalculadoraPageModule' },
  { path: 'informacion', loadChildren: './pages/informacion/informacion.module#InformacionPageModule' },
  { path: 'agregar-horario', loadChildren: './pages/agregar-horario/agregar-horario.module#AgregarHorarioPageModule' }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
