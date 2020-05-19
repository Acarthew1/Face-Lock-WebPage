import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {JwtModule, JwtHelperService} from '@auth0/angular-jwt';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutes } from 'app/app.routing';
import { SidebarModule } from 'app/sidebar/sidebar.module';
import { NavbarModule } from 'app/shared/navbar/navbar.module';
import { ToastrModule } from 'ngx-toastr';
import { FooterModule } from 'app/shared/footer/footer.module';
import { FixedPluginModule } from 'app/shared/fixedplugin/fixedplugin.module';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[
        BrowserAnimationsModule,
        NgxTwitterTimelineModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        FlashMessagesModule.forRoot(),
        HttpClientModule,
        ReactiveFormsModule,
        JwtModule.forRoot({}),
        RouterModule.forRoot(AppRoutes,{
          useHash: true
        }),
        SidebarModule,
        NavbarModule,
        ToastrModule.forRoot(),
        FooterModule,
        FixedPluginModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onRegisterSubmit() method', async(() => {
    spyOn(component, 'onRegisterSubmit');
    const el = fixture.debugElement.query(By.css('.btn')).nativeElement;
    el.click();
    expect(component.onRegisterSubmit).toHaveBeenCalled();
  }));
});
