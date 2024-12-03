import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = '[user]';
  user: UserForAuth | null = null;

  constructor() {
    try {

    } catch (error) {
      //this.user = undefined;
    }
  }

  login() {
    this.user = {
      username: "Stelko",
      email: "stelko@abv.bg",
      tel: "123123",
      password: "123123",
      id: "neshto si",
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }
  register() { }
  logout() { 
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  }
}
