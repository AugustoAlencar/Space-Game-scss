
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { SpaceGameComponent } from './space-game.component';

export const routes: Routes = [

  // For empty routes
  {
    path: 'game',
    component: SpaceGameComponent
  },

]

@NgModule({
  declarations: [
    SpaceGameComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
})
export class SpaceGameModule { }
