import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {TaskManagementComponent} from "./components/task-management/task-management.component";

export const routes: Routes = [
  {
    path: '',
    title: 'TomatoTimer | Home',
    component: HomeComponent
  },
  {
    path: 'chart',
    title: 'TomatoTimer | Dashboard ',
    component: DashboardComponent
  },
  {
    path: 'manager',
    title: 'TomatoTimer | Task management',
    component: TaskManagementComponent
  },
  {
    path: '**', pathMatch: 'full',
    title: 'TomatoTimer | Page not found',
    component: PageNotFoundComponent
  }
];
