import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) {}

  convertToVideo(url: string): Observable<any> {
    const convertUrl = "http://localhost:8080/convert?url="+url;
    const headers = new HttpHeaders({
    });
    return this.http.get<any>(convertUrl, { headers }).pipe(
      map((response: any) => response) // Extract the body here
    );
  }

  getVideoStatus(id:number):Observable<Response> {
    const getStatusUrl = "http://localhost:8080/get?videoId="+id;
    const headers = new HttpHeaders({
    });
    return this.http.get<any>(getStatusUrl, { headers }).pipe(
      map((response: any) => response) // Extract the body here
    );
  }





}
