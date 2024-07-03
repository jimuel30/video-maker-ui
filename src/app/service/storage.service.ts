import { Injectable } from '@angular/core';
import {Video} from "../model/Video";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  public getVideosLocal(): Video[] {
    let videoList: Video[] = [];
    const storedVideos = localStorage.getItem("videos");

    if (storedVideos !== null) {
      try {
        videoList = JSON.parse(storedVideos);
        // Assuming each item in videoList is an object of type Video,
        // you might want to validate or transform each item here if necessary.
      } catch (error) {
        console.error("Error parsing videoList from localStorage:", error);
      }
    }
    return videoList;
  }

  public saveVideosLocal(videos:Video[]){
    localStorage.setItem("videos",JSON.stringify(videos));
  }

  public updateVideosLocal(video: Video) {
    const videos = this.getVideosLocal(); // Assuming getVideosLocal() returns an array of Video objects

    // Find the index of the video with the same ID as the parameter 'video'
    const index = videos.findIndex(v => v.videoId === video.videoId);

    if (index !== -1) {
      // Update the video in the array at the found index
      videos[index] = video;
      // Assuming you have a method to save the updated videos back to local storage
      this.saveVideosLocal(videos); // Example function to save videos back to local storage
    } else {
      // Handle the case where the video with the given ID is not found
      console.error(`Video with ID ${video.videoId} not found in local storage.`);
    }
  }





}
