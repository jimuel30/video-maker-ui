import {Inject, Injectable, PLATFORM_ID} from '@angular/core';

import {io, Socket} from "socket.io-client";
import {isPlatformBrowser} from "@angular/common";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: any;
  isBrowser = false;
  private subject = new Subject < any > ();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId)
    if (this.isBrowser) {
      console.log("hello")
      this.initSocket();
    }
  }

  private initSocket(): void {
    this.socket = io('http://ipv4:8081');

    this.socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });

    this.socket.on('get_message', (data: any) => {
      // Handle incoming messages from the server
      console.log('Received message:', data);
      // You can emit events or update your application state here
    });
  }

  sendMessage(room: string, message: any): void {
    if (this.isBrowser) {
      this.initSocket();
      this.socket.connect()

      if (this.socket.connected) {
        this.socket.emit('send_message', { room, message });
      } else {
        console.error('Socket is not connected, cannot send message!');
      }
    }

  }
}

