import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { map,catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class YtService {

  apiKey = 'AIzaSyAHLo4wCxW2sdf40X1Rh5ho70EsYJOsIZs';//place your youtube api key here
 






  constructor(public http: Http) { 

  }

  

  //this function gets the categories from the youTube rest api.
  // getCategories(){
  //   return this.http.get('https://www.googleapis.com/youtube/v3/videoCategories?order=viewCount&part=snippet&regionCode=US&key='+this.apiKey)
  //   .pipe(
  //     map((res)=>{
  //     return res.json()['items'];
  //   })

  //   )
  // }


  //this function gets videos from the specified category from the youtube rest api
  // getVideos(category){
  //   return this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId='+category+'&key='+this.apiKey)
  //   .pipe(
      
  //     map((res)=>{
  //     return res.json()['items'];
  //   })

  //   )
  
  // }


  getPlaylistsForChannel(channel) {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key='+ this.apiKey +'&channelId=' + channel + '&part=snippet,id&order=date&maxResults=20')
    .pipe(
        map((res) => {
          return res.json()['items']
        })
    )
  }
 
  getpdf() {
    return this.http.get('assets/data/pdf.json')
    .pipe(
        map((res) => {
          return res.json()['items'];
        })
    )
  }



}
