import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home';
import { RootLayoutComponent } from './layouts/root-layout/root-layout.component';
import { EstateListComponent } from './modules/estate-list';

export const routes: Routes = [
  {
    path: '',
    component: RootLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'list',
        component: EstateListComponent,
      },
    ],
  },
];
