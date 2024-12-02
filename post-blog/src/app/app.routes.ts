import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MainComponent } from './main/main.component';
import { AddThemeComponent } from './theme/add-theme/add-theme.component';
import { ThemeDetailsComponent } from './theme/theme-details/theme-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    //   Start - User routing
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },

    // Start - Theme routing
    {
        path: 'themes', children: [
            { path: "", component: MainComponent },
            { path: ":themeId", component: ThemeDetailsComponent }
        ]
    },
    { path: "add-theme", component: AddThemeComponent },
    // End - Theme routing

    { path: "404", component: ErrorComponent },
    { path: '**', redirectTo: "/404" },
];
