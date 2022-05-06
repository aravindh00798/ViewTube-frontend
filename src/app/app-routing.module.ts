import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularContainerComponent } from './popular/components/popular-container/popular-container.component';
import { PopularListComponent } from './popular/components/popular-list/popular-list.component';

const routes: Routes = [{path:'popular-container',component:PopularContainerComponent},{path:'popular-list',component:PopularListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
