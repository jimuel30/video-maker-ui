import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RsaService {

  constructor() {}

  generateToken():string{

    const timeStamp = Date.now()


    return "";
  }
}
