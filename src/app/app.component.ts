import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InputAreaComponent} from "./components/input-area/input-area.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'video-maker-ui';
}
