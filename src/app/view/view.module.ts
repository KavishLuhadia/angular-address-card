import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCompComponent } from './view-comp/view-comp.component';
import { InsideViewSvcService } from './inside-view-svc.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewCompComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ViewCompComponent
  ],
  providers: [InsideViewSvcService]
})
export class ViewModule { }
