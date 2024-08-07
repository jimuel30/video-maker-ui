import { Component,  Output , EventEmitter} from '@angular/core';
import { ApiCallService } from '../../service/api-call.service';
import { FormsModule } from '@angular/forms';
import {StorageService} from "../../service/storage.service";



@Component({
  selector: 'app-input-area',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-area.component.html',
  styleUrl: './input-area.component.scss',
})
export class InputAreaComponent {


  @Output() toggleEvent = new EventEmitter<void>();

  callToggleShow(): void {
    // Emit the event to trigger the parent's toggleShow method
    this.toggleEvent.emit();
  }

  constructor(private apiService: ApiCallService, private  storageService:StorageService) {}

  url!: string;

  errorString = '';

  submitHandler() {



    this.apiService.convertToVideo(this.url).subscribe({
      next: (v) => {
        if (200 === v.status) {
          const savedVideos = this.storageService.getVideosLocal();
          savedVideos.push(v.data)
          this.storageService.saveVideosLocal(savedVideos);
        } else {
          this.errorString = v.message;
        }
      },
      error: (e) => {
        this.errorString = e.error.message;
      },
      complete: () => console.info('complete'),
    });

    return false;
  }
}
