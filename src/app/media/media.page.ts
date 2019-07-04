import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../provider/loading.service';
import { YtService } from '../provider/yt.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { Observable } from 'rxjs';
import { AlertController, ModalController, Platform, LoadingController } from '@ionic/angular'
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { map,catchError } from "rxjs/operators";
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
  providers: [
    YtService,
    YoutubeVideoPlayer,
    LoadingService 
  ]
})
export class MediaPage implements OnInit {

  private categoryArray;
  private videos=[];
  private video;



  //channelId = 'UCZZPgUIorPao48a1tBYSDgg'; // Devdactic Channel ID

  channelId = 'UCBdTgfPwN3qcbef_rbd2UQw';
  
  playlists: Observable<any[]>;



    constructor(public ytProvider:YtService, 
                public alertCtrl:AlertController, 
                public loading:LoadingService,
                public modalCtrl:ModalController, 
                public plt: Platform,
                private router: Router, 
                public loadingCtrl: LoadingController,
                public youtube:YoutubeVideoPlayer,
                public http: Http,
                private fileOpener: FileOpener) {
  

     this.searchPlaylists()

            
    }

    //opens selected video for viewing
    viewVideo(vid){
      //if we are on a device where cordova is available we user the youtube video player
      if(this.plt.is('cordova')){
        this.youtube.openVideo(vid.id.videoId);//opens video with videoId
      }else{
        //if we are not on a device where cordova is available we open the video in browser.
        window.open('https://www.youtube.com/watch?v=' + vid.id.videoId);
      }
    }

   


  searchPlaylists() {
    this.playlists = this.ytProvider.getPlaylistsForChannel(this.channelId);
    this.playlists.subscribe(data => {
      console.log('playlists: ', data);
    }, err => {
      let alert = this.alertCtrl.create({
        header: 'Error',
        message: 'No Playlists found for that Channel ID',
        buttons: ['OK']
      });
     // alert.present();
    })
  }

  pdf(){

    this.fileOpener.open('assets/data/pdf/TEAM-2-BRANDING-YOURSELF.-FRESH-GRADUATE-JUNE-2019.pdf', 'application/pdf')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));

    // this.fileOpener.showOpenWithDialog('assets/data/pdf/TEAM-2-BRANDING-YOURSELF.-FRESH-GRADUATE-JUNE-2019.pdf', 'application/pdf')
    //   .then(() => console.log('File is opened'))
    //   .catch(e => console.log('Error opening file', e));



  }
 
  openPlaylist(id) {
   
    this.router.navigate(['/pdf'],{
      queryParams: id,
      });
  }

  ngOnInit() {
  }

}
