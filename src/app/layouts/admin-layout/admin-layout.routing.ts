import { Routes } from '@angular/router';
import {AuthGuard} from '../../guards/auth.guard';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TwitterComponent } from '../../pages/twitter/twitter.component';
import { TrustedComponent } from '../../pages/TrustedUsers/trusted.component';
import { LivestreamComponent } from '../../pages/Livestream/stream.component';
import { UploadimgComponent } from '../../pages/uploadImg/uploadImg.component';
import { RegisterComponent } from 'app/components/register/register.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate:[AuthGuard] },
    { path: 'user',           component: UserComponent , canActivate:[AuthGuard]},
    { path: 'twitter',     component: TwitterComponent , canActivate:[AuthGuard]},
    { path: 'guests',          component: TrustedComponent , canActivate:[AuthGuard]},
    { path: 'feed',           component: LivestreamComponent , canActivate:[AuthGuard]},
    { path: 'imgupload',  component: UploadimgComponent , canActivate:[AuthGuard]},
];
