import { EstablishmentsComponent } from './views/establishments/establishments/establishments.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'establishments/list' },
  {
    path: 'establishments',
    loadChildren: () => import('./views/establishments/establishment.module').then(m => m.EstablishmentModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
