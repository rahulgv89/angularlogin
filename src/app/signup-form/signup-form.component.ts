import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }
  signupUser(e) {
    e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
    var confirmpassword = e.target.elements[2].value;
    
  	if(username == 'admin' && password == 'admin'&& confirmpassword == 'admin') {
      this.user.setUserLoggedIn;
  		this.router.navigate(['home']);
  	} 
  }
}
