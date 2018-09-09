import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [

  // For empty routes
   {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full'
  },

  // Routes for components
  {
    path: 'game',
    loadChildren : './space-game/space-game.module#SpaceGameModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
