import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(){
    this.userForm = new FormGroup({
      email : new FormControl('',[Validators.required, Validators.email]),
    })
  }
  title = 'reactive-forms';
  userForm : FormGroup;
  submitted = false;
  get foo() {return this.userForm.controls}

  onSubmit(){
    this.submitted = true;
    if(this.userForm.controls.email.status != 'INVALID')
    {
    alert('Passed');
    } 
    else
    {
      alert('failed');
    }

  }
}


