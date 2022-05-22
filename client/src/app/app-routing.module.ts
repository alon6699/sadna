import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
