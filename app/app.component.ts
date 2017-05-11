import { Component } from '@angular/core';
import {AuthenticationService} from "./shared/services/authentication.service";

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['styles/app.component.css']
})

export class AppComponent {


    constructor(private authService: AuthenticationService){}

    Logout(){
        this.authService.logout();
    }
}