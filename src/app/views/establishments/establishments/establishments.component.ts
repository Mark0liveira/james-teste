import { EstablishmentService } from './../../../shared/services/establishment.service';
import { EstablishmentInterface } from './../../../shared/interfaces/establishments.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.scss']
})
export class EstablishmentsComponent implements OnInit {

  public establishments: EstablishmentInterface;

  constructor(public establishmentService: EstablishmentService) { }

  ngOnInit(): void {
    this.getEstablishments();
  }

  public getEstablishments(): void {
    this.establishmentService.get()
      .subscribe((res: EstablishmentInterface) => {
        console.log(res);
        this.establishments = res;
      });
  }

}
