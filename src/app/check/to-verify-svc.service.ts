import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToVerifySvcService {

  constructor() { }

  printFromInner(arg:any){
    console.log(arg);
  }
}
