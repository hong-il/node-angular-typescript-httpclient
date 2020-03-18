import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { UploaderComponent } from './uploader/uploader.component';
import { MessagesComponent } from './messages/messages.component';
import { PackageSearchComponent } from './package-search/package-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    HeroesComponent,
    DownloaderComponent,
    UploaderComponent,
    MessagesComponent,
    PackageSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
