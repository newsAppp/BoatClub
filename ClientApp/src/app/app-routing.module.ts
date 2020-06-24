import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RentComponent } from './rent/rent.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'rent', component: RentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
