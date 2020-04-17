import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TrustedComponent }           from '../../pages/TrustedUsers/trusted.component';
import { LivestreamComponent }            from '../../pages/Livestream/stream.component';
import { UploadimgComponent }   from '../../pages/uploadImg/uploadImg.component';
//import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
   // TypographyComponent,
    TrustedComponent,
    LivestreamComponent,
    UploadimgComponent,
  ]
})

export class AdminLayoutModule {}
