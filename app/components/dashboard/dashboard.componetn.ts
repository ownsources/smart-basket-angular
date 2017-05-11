

import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {User} from "../../shared/models/user";
import {Md2Toast} from "md2";
@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

    constructor(){}

    //
    //
    // login(){
    //     this.authenticationService.login(this.model.username, this.model.password)
    //         .subscribe(
    //             data  => this.router.navigate(['/artists']),
    //             error => this.toast.toast('Неверные данные')
    //         );
    // }
}