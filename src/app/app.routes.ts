import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: 'movies', component: MoviesComponent},
    {path: 'home', component: HomeComponent}
];
