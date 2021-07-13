import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string = "";
  public formInValid: boolean = false;
  public usernameOrPasswordWrong: boolean = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) { };

  ngOnInit(): void {
  };

  // Login Method
  public login(): void {
    if (this.username && this.password) {
      this.formInValid = false;
      // der Benutzer hat etwas in die Felder eingegeben!
      const loginSuccessful: boolean = this.authenticationService.login(this.username, this.password);
      console.log("Loginvorgangsresultat", loginSuccessful)
      if (loginSuccessful) {
        // Weiterleiten
        this.usernameOrPasswordWrong = false;
        this.router.navigate(["/home"])
      } else {
        this.usernameOrPasswordWrong = true;
      }
    } else {
      this.formInValid = true;
    }
  };
}
