import { Component } from '@angular/core';

import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
   
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: [],
      address: fb.array([])
    })
  }

  addNewAddressGroup() {
    const add = this.form.get('address') as FormArray;
    add.push(this.fb.group({
      street: [],
      city: []
    }))
  }

  deleteAddressGroup(index: number) {
    const add = this.form.get('address') as FormArray;
    add.removeAt(index)
  }
}
