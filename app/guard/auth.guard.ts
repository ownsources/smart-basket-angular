import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean>
        | Promise<boolean>
        | boolean
    {
        console.log(localStorage.getItem('currentUser'));

        if(localStorage.getItem('currentUser')) {
            return true;
        }

        this.router.navigate(['login'],{queryParams: {returnUrl: state.url }});
        return false
    }

    constructor(private router: Router){

    }
}