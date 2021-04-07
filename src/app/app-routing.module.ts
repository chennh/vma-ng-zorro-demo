import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginGuard } from './modules/guards/login/login.guard'
import { FrameGuard } from './modules/guards/frame/frame.guard'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'frame',
    loadChildren: () => import('./pages/frame/frame.module').then(m => m.FrameModule),
    canActivate: [FrameGuard]
  },
  { path: 'public', loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule) },
  { path: '**', redirectTo: '/public/page404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
