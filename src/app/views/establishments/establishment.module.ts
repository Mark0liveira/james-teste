import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialBaseModule } from './../../shared/material/material-base/material-base.module';
import { EstablishmentsDetailsComponent } from '../establishments/establishment-details/establishment-details.component';
import { EstablishmentsComponent } from './establishments/establishments.component';
import { EstablishmentRoutes } from './establishment.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentService } from 'src/app/shared/services/establishment.service';



@NgModule({
  imports: [
    RouterModule.forChild(EstablishmentRoutes),
    CommonModule,
    MaterialBaseModule,
    FlexLayoutModule
  ],
  declarations: [EstablishmentsComponent, EstablishmentsDetailsComponent],
  exports: [EstablishmentsComponent, EstablishmentsDetailsComponent],
  providers: [
    EstablishmentService
  ]
})
export class EstablishmentModule { }
