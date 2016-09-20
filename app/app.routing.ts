//https://angular.io/docs/ts/latest/guide/router.html
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { SearchComponent } from './components/search/search.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: SearchComponent },
  { path: '**', component: AboutComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
