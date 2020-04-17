import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bookmark-2',       class: '' },
    { path: '/guests',         title: 'Guests',             icon:'nc-satisfied',    class: '' },
    { path: '/feed',          title: 'Livestream',              icon:'nc-spaceship',      class: '' },
    { path: '/twitter',    title: 'Twitter Feed',              icon:'nc-paper',      class: '' },
    { path: '/imgupload',    title: 'Upload Photo',              icon:'nc-camera-compact',      class: '' }

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    constructor(private authService:AuthService){}
    user: String;
    username: String;
    TrustedUsers: [];
    email: String;
    name: String;
    public menuItems: any[];
    ngOnInit() {

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

        console.log(this.user);
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
