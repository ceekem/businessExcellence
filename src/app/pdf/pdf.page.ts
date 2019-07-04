import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { YtService } from '../provider/yt.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.page.html',
  styleUrls: ['./pdf.page.scss'],
})
export class PdfPage implements OnInit {

  playlists: Observable<any[]>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private ytProvider: YtService, private youtube: YoutubeVideoPlayer, private plt: Platform) { 

    // let listId = this.navParams.get('id');
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.id) {
        let listId = JSON.parse(params.id);
        console.log("pdf: ", listId);
        // this.videos = this.ytProvider.getListVideos(listId);
      }
    });

    console.log('test');
    this.pdf();
  }


pdf(){
  this.playlists = this.ytProvider.getpdf();

  this.playlists.subscribe(data => {
    console.log('playlists: ', data);
  }, err => {
    // let alert = this.alertCtrl.create({
    //   header: 'Error',
    //   message: 'No Playlists found for that Channel ID',
    //   buttons: ['OK']
    // });
})

}



  ngOnInit() {
  }

}
