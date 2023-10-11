import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'appf', component: AppComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'restaurant', component: RestaurantsComponent },
    { path: 'login', component: LoginComponent },
    {path:'signup', component:SignupComponent},
    { path: 'restaurant-details/:id', component: RestaurantDetailsComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
