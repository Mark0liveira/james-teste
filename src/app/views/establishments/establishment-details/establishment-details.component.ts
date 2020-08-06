import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './establishment-details.component.html',
  styleUrls: ['./establishment-details.component.scss']
})
export class EstablishmentsDetailsComponent implements OnInit {

  public form: FormGroup;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
