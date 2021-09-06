import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  public username: string = '';

  constructor(private readonly router: Router,
    private readonly userService: UserService) {
  }

  private RedirectLogin()
  {
    //this.router.parseUrl('/catalog');
    this.router.navigate(["/catalog"]);
  }

  ngOnInit()
  {
    // is user already logged in? 
    if (this.userService.Username !== "")
    {
      this.RedirectLogin();
    }
  }

  // login user and save username
  public onLoginClick(): void {
    if (this.username !== "") {
      this.userService.saveUsername(this.username);
      this.RedirectLogin();
    }
  }

}
