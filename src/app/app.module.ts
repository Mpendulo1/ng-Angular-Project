import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthService } from './service/auth.service';
import { LoginSignupComponent } from './components/login-signup/login.component';

@NgModule({
    declarations: [
        AppComponent,
        RestaurantsComponent,
        HomeComponent,
        BlogComponent,
        PageNotFoundComponent,
        RestaurantDetailsComponent,
        LoginComponent,
        SignupComponent,
        LoginSignupComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {}
