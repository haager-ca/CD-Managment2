import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLoggedIn: boolean = false;

  // Compare Password
  public login(username: string, password: string): boolean {
    if (username == "test" && password == "cool") {
      // Erfolgreich eingelogt
      this.isLoggedIn = true;
      return true;
    } else {
      // Nicht erfolgreich eingeloggt
      this.isLoggedIn = false;
      return false;
    }
  }

  public get loggedIn() {
    return this.isLoggedIn;

  }
}
