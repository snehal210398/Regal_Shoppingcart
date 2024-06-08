import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  detailsReactiveForm!:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.detailsReactiveForm = this.fb.group({
      firstname: new FormControl("", {validators:[Validators.required]}),
      lastname: new FormControl("", {validators:[Validators.required]}),
      email:['', [Validators.required, Validators.email]],
      mobilenumber: new FormControl("", {validators:[Validators.required]}),
      age: new FormControl("", {validators:[Validators.required]}),
      dob: new FormControl("", {validators:[Validators.required]}),
      address1:["", [Validators.required]],
      address2:["", [Validators.required]],
      city:["", [Validators.required]],
      state:["", [Validators.required]],
      zip:["", [Validators.required]],
      check:["", [Validators.required]]
    })

  }

   addDetails(){
    console.log(this.detailsReactiveForm.getRawValue());
    this.detailsReactiveForm.reset();
  }
}
