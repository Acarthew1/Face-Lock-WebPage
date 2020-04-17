import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{

    constructor(private authService:AuthService){}
    user: String;
    username: String;
    TrustedUsers: [];
    email: String;
    name: String;

    ngOnInit(){
        this.authService.getProfile().subscribe((profile: any) => {
            this.user = profile.user;
            this.name = this.user["name"]
            this.username = this.user["username"];
            this.TrustedUsers = this.user["TrustedUsers"];
            this.email = this.user["email"];
          },
          err => {
            console.log(err);
            return false;
      
          });
        

    }

    updateProfule(){
        
    }
}
