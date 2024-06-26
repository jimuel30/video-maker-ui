import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {VideoItemComponent} from "../video-item/video-item.component";
import {Video} from "../../model/Video";

@Component({
  selector: 'app-video-area',
  standalone: true,
  imports: [
    VideoItemComponent
  ],
  templateUrl: './video-area.component.html',
  styleUrl: './video-area.component.scss'
})
export class VideoAreaComponent {


  @Output() toggleEvent = new EventEmitter<void>();

  callToggleShow(): void {
    // Emit the event to trigger the parent's toggleShow method
    this.toggleEvent.emit();
  }





  @ViewChild('videoWrapper1') videoWrapper1!: ElementRef;
  @ViewChild('videoWrapper2') videoWrapper2!: ElementRef;

  videoQueList:any[] = []
  videoCompletedList:any[] = []

  queActive = true;





  queClickHandler() {
    this.queActive = true;
    this.scrollToElement(this.videoWrapper1);
  }

  completedClickHandler() {
    this.queActive = false;
    this.scrollToElement(this.videoWrapper2);
  }

  scrollToElement(element: ElementRef) {
    if (element && element.nativeElement) {
      const elementPosition = element.nativeElement.getBoundingClientRect();
      const container = document.querySelector('#video-container'); // Assuming this is the scrollable container

      if (container) {
        const containerPosition = container.getBoundingClientRect();
        const scrollLeft = elementPosition.left - containerPosition.left;

        container.scrollBy({
          top: 0, // No vertical scrolling
          left: scrollLeft, // Scroll horizontally to the element's left position
          behavior: 'smooth'
        });
      }
    }
  }

}
