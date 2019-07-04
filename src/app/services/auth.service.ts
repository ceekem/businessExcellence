import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationState = new BehaviorSubject(false);
 
  constructor(private storage: Storage, private plt: Platform) { 
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
  }
 
  login(email, password) {
    if(email === 'ray@gmail.com' && password === "123456"){
        return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
          this.authenticationState.next(true);
        });
      }
  }
 
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }
}
