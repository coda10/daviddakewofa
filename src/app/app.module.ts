import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadBrochureComponent } from './download-brochure/download-brochure.component';
import { ViewOnlineComponent } from './view-online/view-online.component';

@NgModule({
  declarations: [
    AppComponent,
    DownloadBrochureComponent,
    ViewOnlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
