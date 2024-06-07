import { Component } from '@angular/core';
import {ApiCallService} from "../../service/api-call.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-input-area',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input-area.component.html',
  styleUrl: './input-area.component.scss'
})
export class InputAreaComponent {

  constructor(private apiService: ApiCallService) {}

  url!:string;

  errorString = ""

  submitHandler(){

    this.apiService.convertToVideo(this.url).subscribe({
      next: (v) => {
        if(200 === v.status){
          //add to que
        }
        else{
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
