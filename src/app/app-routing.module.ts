import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from './shared/guards/active/active.guard';
import { LoginGuard } from './shared/guards/login/login.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    canActivate: [ActiveGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'tokens',
    canActivate: [ActiveGuard],
    loadChildren: () =>
      import('./tokens/tokens.module').then((m) => m.TokensPageModule),
  },
  {
    path: 'orders',
    canActivate: [ActiveGuard],
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersPageModule),
  },
  {
    path: 'milkcard',
    canActivate: [ActiveGuard],
    loadChildren: () =>
      import('./milkcard/milkcard.module').then((m) => m.MilkcardPageModule),
  },
  {
    path: 'subscription',
    canActivate: [ActiveGuard],
    loadChildren: () =>
      import('./subscription/subscription.module').then(
        (m) => m.SubscriptionPageModule
      ),
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
