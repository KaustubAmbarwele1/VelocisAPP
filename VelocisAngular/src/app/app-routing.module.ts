import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { LoginPageComponent } from './login-page/login-page.component'; 
import { AuthGuard } from './auth.guard';


const routes: Routes = [

  {path:'',
  component:LoginPageComponent,
  },

  {path:'loginpage',
  component:LoginPageComponent,
  },

  
  // {path:'forgetpassword',
  // component:ForgetPasswordComponent,
  // canActivate: [AuthGuard]
  // },

  {path:'dashboard',
  component:DashboardComponent,
  canActivate: [AuthGuard]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
