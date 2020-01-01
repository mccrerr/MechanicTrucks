import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {
  garageForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.garageForm = this.fb.group({
      garageID: '',
      businessName: '',
      contactFirstName: '',
      contactLastName: '',
      address1: '',
      address2: '',
      address3: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      phone2: '',
      contactEmail: '',
    });
  }
}
