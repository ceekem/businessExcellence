import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MediaPage } from './media.page';
import { HttpModule } from '@angular/http';



const routes: Routes = [
  {
    path: '',
    component: MediaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MediaPage
  ]

})
export class MediaPageModule {}
