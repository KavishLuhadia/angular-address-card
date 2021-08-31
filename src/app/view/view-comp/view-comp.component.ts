import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { InsideViewSvcService } from '../inside-view-svc.service';

@Component({
  selector: 'app-view-comp',
  templateUrl: './view-comp.component.html',
  styleUrls: ['./view-comp.component.css']
})
export class ViewCompComponent implements OnInit {

  userName?: string;
  response?:any;
  constructor(private svc: TestService, private httpClient: HttpClient ) {
    //let svc = new TestService();
    this.svc.printToConsole("From View Component");
    //this.testView.printToConsole("Test From View Component");
    
   }

  ngOnInit(): void {

  }

  searchRepo(){
    let obs = this.httpClient.get('https://api.github.com/users/' + this.userName);
    obs.subscribe((res) => {
      console.log(res)
      this.response = res;
    });
  }
}
