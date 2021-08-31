import { Component, Input, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  //@Input('name') username?: string ;
  @Input() userObj : any;
  //@Input() designation?: string;
  show: boolean = false;
 

  constructor(private svc : TestService) { 

    this.svc.printToConsole("from address component");
  }

  ngOnInit(): void {
  }

  toggle(){
    this.show = !this.show;
  }

}
