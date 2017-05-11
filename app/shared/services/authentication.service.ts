import {Injectable} from "@angular/core";
import {Http,  Headers, RequestOptions, Response} from "@angular/http";
import {AppConfig} from "../../app.config";
import {User} from "../models/user";

@Injectable()
export class AuthenticationService {

    private options = new RequestOptions(new Headers({ 'Content-Type': 'application/json'}));


    constructor(private http: Http, private config: AppConfig){}

    login(username: string, password: string){
        let user = new User();
        user.username = username;
        user.password = password;

        return this.http.post(this.config.apiUrl + '/login', user, this.options)
            .map((res: Response) =>{

                let user = res.json();

                if(user)
                    localStorage.setItem('currentUser', JSON.stringify(user));
            });
    }

    logout(){
        localStorage.removeItem('currentUser');
    }
}