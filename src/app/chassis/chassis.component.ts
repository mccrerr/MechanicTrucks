import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chassis',
  templateUrl: './chassis.component.html',
  styleUrls: ['./chassis.component.css']
})
export class ChassisComponent implements OnInit {
  chassisForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.chassisForm = this.fb.group({
      garageId: '',
      unitId: '',
      section: 'Chassis',
      make: 'Ford',
      model: 'F500',
      cab: '',
      sleeper: false,
      vin: '',
      vinLastSix: '',
      engineHours: '',
      mileage: '',
      description: '',
      category: '',
      subCategory1: '',
      subCategory2: '',
      displayOnWeb: true,
      inServiceDate: '',
      warranty: true,
    });
  }
}
