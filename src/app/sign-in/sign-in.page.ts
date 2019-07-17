import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor( private modalController: ModalController,
               private authService: AuthService,
               private navCtrl: NavController,
               private alertService: AlertService) { }

  ngOnInit() {
  }

  login(form: NgForm) {

   
    if(form.value.email != "" && form.value.password != ""){
       let email = 'ray@gmail.com';
       let password = '123456';
       
       this.authService.login(email, password);
    }
    
  }

}
