import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.componetn";


const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},

    { path: '**', redirectTo: '/login'}
];

export const routing = RouterModule.forRoot(routes);