import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { FormsModule } from '@angular/forms';
import { ViewModule } from './view/view.module';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateTimeComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ViewModule,
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
