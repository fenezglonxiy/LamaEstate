import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { RootLayoutComponent } from './layouts/root-layout/root-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: RootLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
