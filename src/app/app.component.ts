import { Component, OnInit, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputAreaComponent } from './components/input-area/input-area.component';
import { VideoAreaComponent } from './components/video-area/video-area.component';
import { NgIf } from '@angular/common';
import EventEmitter from 'node:events';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputAreaComponent, VideoAreaComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'video-maker-ui';

  showVideoArea = false;

  toggleShow() {


    this.showVideoArea = !this.showVideoArea;
  }
}
