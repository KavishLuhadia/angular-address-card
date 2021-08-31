import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsideViewSvcService {

  constructor() { }

  printToConsole(arg:any){
   console.log(arg);
  }
}
