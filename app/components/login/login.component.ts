

import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {User} from "../../shared/models/user";
import {Md2Toast} from "md2";
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    model: User = new User();

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,

        private toast: Md2Toast
    ){}



    login(){
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data  => this.router.navigate(['/artists']),
                error => this.toast.toast('Неверные данные')
            );
    }
}