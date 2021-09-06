import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private username: string = ''

    private loadUsername() : void {
        let user = localStorage.getItem("username"); 
        this.username = (user !== null) ? user : "";
    }

    constructor() {
        this.loadUsername();
    }

    public isUserLoggedIn()
    {
        return (this.username !== '');
    }

    public get Username() : string {
        return this.username;
    }
    
    public saveUsername(username: string) {
        localStorage.setItem("username", username);
        this.username = username;
    }
 

}