import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home';
import { RootLayoutComponent } from './layouts/root-layout/root-layout.component';
import { EstateListComponent } from './modules/estate-list';
import { EstateDetailsComponent } from './modules/estate-details';

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
        path: 'list/:id',
        component: EstateDetailsComponent,
      },
      {
        path: 'list',
        component: EstateListComponent,
      },
    ],
  },
];
