import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToVerifySvcService } from './check/to-verify-svc.service';
import { User } from './user.model';
import { InsideViewSvcService } from './view/inside-view-svc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    inLineText: string = 'Two way Binding';
    user: User;
  constructor(private testView: InsideViewSvcService, private httpClient: HttpClient){
     this.user = new User();
    this.user.name = "KLuhadia";
    this.user.designation = "Sr. Developer";
    this.user.Phone = ['111111111', '999999999'];
    this.testView.printToConsole("Test From App Component");
    let obs = this.httpClient.get('https://api.github.com/users/koushikkothagal');
    obs.subscribe((resp)=>console.log(resp));
    //this.verifySvc.printFromInner("Bazinga!!");

    
  }
}
