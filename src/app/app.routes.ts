import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

export const routes: Routes = [
    {
        path: '',
        title: 'Home | TomatoTimer',
        component: HomeComponent
    },
    {
        path: '**', pathMatch: 'full',
        title: 'Page not found | TomatoTimer',
        component: PageNotFoundComponent
    }
];
