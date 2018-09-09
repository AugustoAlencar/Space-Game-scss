import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from "src/app/app.routing";

import { SpaceGameModule } from './space-game/space-game.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SpaceGameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
