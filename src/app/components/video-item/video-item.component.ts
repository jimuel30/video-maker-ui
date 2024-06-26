import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "../../service/websocket.service";
import {io} from "socket.io-client";
import {Message} from "../../model/Message";


@Component({
  selector: 'app-video-item',
  standalone: true,
  imports: [],
  templateUrl: './video-item.component.html',
  styleUrl: './video-item.component.scss'
})


export class VideoItemComponent implements OnInit{



  ngOnInit(): void {


  }





}
