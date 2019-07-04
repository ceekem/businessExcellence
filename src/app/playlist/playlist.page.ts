import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { YtService } from '../provider/yt.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {

  videos: Observable<any[]>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private ytProvider: YtService, private youtube: YoutubeVideoPlayer, private plt: Platform) {

    // let listId = this.navParams.get('id');
    // this.route.queryParams.subscribe(params => {
    //   if (params && params.id) {
    //     let listId = JSON.parse(params.id);
    //     this.videos = this.ytProvider.getListVideos(listId);
    //   }
    // });
  
  //   this.activatedRoute.queryParams.subscribe((res)=>{
  //    this.videos = this.ytProvider.getListVideos(res);
  //     console.log('res: ' + res);
  //     console.log('video: ' + this.videos);
  // });

   }


   openVideo(video) {
    if (this.plt.is('cordova')) {
      this.youtube.openVideo(video.snippet.resourceId.videoId);
    } else {
      window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
    }
  }



  ngOnInit() {
  }

}
