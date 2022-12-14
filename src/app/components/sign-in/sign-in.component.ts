import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})

export class SignInComponent implements OnInit {
  constructor(public authService: AuthService,private router: Router) {
    if(authService.isLoggedIn){
    this.router.navigate(['dashboard']);
  };}
  
  ngOnInit() {}
}
