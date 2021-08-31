import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckServiceComponent } from './check-service/check-service.component';
import { ToVerifySvcService } from './to-verify-svc.service';



@NgModule({
  declarations: [
    CheckServiceComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ToVerifySvcService
  ]
})
export class CheckModule { }
