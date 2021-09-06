import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { CatalogPage } from './catalog/catalog.page';
import { LoginGuard } from './login.guard';
import { TrainerPage } from './trainer/trainer.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'catalog',
    component: CatalogPage,
    canActivate: [LoginGuard],
  },
  {
    path: 'trainer',
    component: TrainerPage,
    canActivate: [LoginGuard],
  }
  /*
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: `/login`
  } */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
