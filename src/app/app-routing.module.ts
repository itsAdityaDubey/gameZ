import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// route guard
import { AuthGuard } from './shared/guard/auth.guard';

//Child Routes
import { MainComponent } from './components/dash/main/main.component';
import { AboutComponent } from './components/dash/about/about.component';
import { TetrisComponent } from './components/games/tetris/tetris.component';
import { ProfileComponent } from './components/dash/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { 
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children:[
      { path: '', component: MainComponent},
      { path: 'about', component: AboutComponent},
      { path: 'tetris', component: TetrisComponent},
      { path: 'profile', component: ProfileComponent}
    ]
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})

export class AppRoutingModule {}