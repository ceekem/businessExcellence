import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingService } from './provider/loading.service';
import { YtService } from './provider/yt.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { HttpClientModule }    from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            HttpModule, 
            IonicModule.forRoot(), 
            AppRoutingModule,
            HttpClientModule,
            IonicStorageModule.forRoot()
          ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    YtService,
    YoutubeVideoPlayer,
    LoadingService,
    FileOpener,
    NativeStorage
    // Http
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
