import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {
  
  date: String | undefined;
  constructor() { 
    
    setInterval(()=>{
      this.date = new Date().toString();
    },1000)
  }

  ngOnInit(): void {
    
  }

}
