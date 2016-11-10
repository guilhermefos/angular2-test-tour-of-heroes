import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
	welcome = '-- not initialized yet --';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  	this.welcome = this.userService.isLoggedIn ?
  	'Welcome, ' + this.userService.user.name :
  	'Please log in.';
  }
}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
