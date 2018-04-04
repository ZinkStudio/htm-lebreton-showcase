import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../assets/material/material.module';
import { PrimeNgModule } from '../assets/primeng/primeng.module';
import { LayoutModule } from './layout/layout.module';


import { SwiperWrapperModule } from '../assets/swiper/swiper-wrapper.module';
import { AgmCoreModule } from '@agm/core';

import { breakpointsProvider } from 'angular-breakpoints';

import { FlexDirectionDirective } from './flex-direction.directive';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ActivityComponent } from './activity/activity.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { ZoneComponent } from './intervention/zone/zone.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        ActivityComponent,
        IntroductionComponent,
        ContactComponent,
        FooterComponent,
        ContactFormComponent,
        PricingComponent,
        FlexDirectionDirective,
        HomeComponent,
        ZoneComponent,
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,

        MaterialModule,
        PrimeNgModule,
        LayoutModule,
        SwiperWrapperModule,
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyCp9qumF7vWY79K2ImOyr35FJjXQRWzcoQ' }),
    ],
    providers: [
        breakpointsProvider(),
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
