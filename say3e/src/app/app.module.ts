import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnicalComponent } from './technical/technical.component';
import { SendComponent } from './send/send.component';
import { CommunityComponent } from './community/community.component';


@NgModule({
  declarations: [
    AppComponent,
    TechnicalComponent,
    SendComponent,
    CommunityComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
