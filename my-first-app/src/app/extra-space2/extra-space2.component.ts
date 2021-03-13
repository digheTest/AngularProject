import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-space2',
  templateUrl: './extra-space2.component.html',
  styleUrls: ['./extra-space2.component.css']
})
export class ExtraSpace2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 async getLogin() {
    const username = document.getElementById("username1") as any;
    const password = document.getElementById("password") as any;

    
      const response = await fetch('http://localhost:3001/sessions/create',
        {
          method: 'POST',
          body: JSON.stringify({
            username: username.value,
            password: password.value
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      console.log(await response.json());
    

  }
}
