import { Component, OnInit } from '@angular/core';
import {ValidateService } from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';



@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'trusted.component.html'
})

export class TrustedComponent implements OnInit{
    TrustedUser: String;
    username : String;
    user: Object;
    TrustedUsers: [];
    constructor(private validateService: ValidateService, private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router) { }
    ngOnInit() {
        this.authService.getProfile().subscribe((profile: any) => {
            this.user = profile.user;
            this.username = this.user["username"];
            this.TrustedUsers = this.user["TrustedUsers"];
          },
          err => {
            console.log(err);
            return false;
      
          });
    }

    addTrustedUser(){
        const user = {

            TrustedUser: this.TrustedUser,
            username: this.username
            
        }
        
       // console.log(TrustedUser);
        //console.log(username);

        if(!this.validateService.validateTrustedUser(user.TrustedUser)){
            this.flashMessage.show('Please Fill in all forms', {cssClass: 'alert-danger', timeout: 3000});
            return false;
          }
      
          this.authService.addTrustedUser(user).subscribe((data: any) => {
            if(data.success){
              this.ngOnInit();  
              this.flashMessage.show('Trusted User Added', {cssClass: 'alert-success', timeout: 3000});
              
      
            }else{

              this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
            }
      
          });
          
        }
    removeTrustedUser(username){
        const TrustedUser = username;
        const user = {

            TrustedUser: TrustedUser,
            username: this.username

            
            
        } 
        this.authService.removeTrustedUser(user).subscribe((data: any) => {
            if(data.success){
                this.ngOnInit();  
                this.flashMessage.show('Trusted User Removed', {cssClass: 'alert-success', timeout: 3000});
                
        
            }else{

                this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
            }
        
            });
        
            
        }
        

       
      
    }
    


