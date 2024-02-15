import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/forms/register/register.component';

export const routes: Routes = [
    {path: 'movies', component: MoviesComponent},
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', redirectTo: 'home'}
];
