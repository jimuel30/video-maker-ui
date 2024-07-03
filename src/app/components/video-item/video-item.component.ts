import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {WebsocketService} from "../../service/websocket.service";
import {Video} from "../../model/Video";
import {NgClass, NgForOf} from "@angular/common";
import {RxStomp} from "@stomp/rx-stomp";
import {ApiCallService} from "../../service/api-call.service";
import {StorageService} from "../../service/storage.service";






@Component({
  selector: 'app-video-item',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './video-item.component.html',
  styleUrl: './video-item.component.scss'
})


export class VideoItemComponent implements  OnInit{

  @Input() video!:Video;
  itemIcon = "fa-solid fa-spinner fa-spin";
  itemLabel = "PROCESSING";
  videoTitle = ""



  constructor(private websocketService: WebsocketService,
              private apiService:ApiCallService,
              private storageService:StorageService) {}

  ngOnInit(): void {

    if("PROCESSING"===this.video.status){
      this.callApiUpdate();
    }
    else{
      this.processUpdate(true);
    }

  }


  callApiUpdate(){
    this.apiService.getVideoStatus(this.video.videoId).subscribe({
      next: (v:any) => {
        if (200 === v.status) {
          this.video = v.data;
          this.processUpdate(false)
        } else {
          console.log(v);
        }
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => console.info('complete'),
    });
  }




  processUpdate(fromSubscribe:boolean){
    this.itemLabel = this.video.status

    if("PROCESSING"===this.video.status){
        if(!fromSubscribe){
          this.subscribe();
        }
    }
    else if("FAILED"===this.video.status){
      this.itemIcon  = "fa-solid fa-circle-exclamation";
      this.storageService.updateVideosLocal(this.video)
    }
    else{
      this.itemIcon = "fa-regular fa-circle-down";
      this.storageService.updateVideosLocal(this.video)
    }

  }

  subscribe(){
    this.websocketService.subscribe('/topic/'+this.video.videoId, (message: any) => {
      this.video = message;
      this.processUpdate(true);
      console.log('Received message:', message);
      // Handle message processing here
    });
  }
  // send(): void {
  //   const video:Video = {
  //     videoId:1,
  //     status:"HELLO",
  //     dateRequested:null,
  //     url:"hello",
  //   }
  //
  //   const messageToSend = JSON.stringify(video);
  //   const destinationQueue = '/app/send/1';
  //   const headers = {
  //     // Optionally, add headers here if needed
  //   };
  //
  //   this.websocketService.send(destinationQueue, messageToSend, headers);
  // }
}
