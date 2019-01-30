import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDatepickerConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage } from 'ngx-webstorage';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { HopeJustFoundSharedModule } from 'app/shared';
import { HopeJustFoundCoreModule } from 'app/core';
import { HopeJustFoundAppRoutingModule } from './app-routing.module';
import { HopeJustFoundHomeModule } from './home/home.module';
import { HopeJustFoundAccountModule } from './account/account.module';
import { HopeJustFoundEntityModule } from './entities/entity.module';
import * as moment from 'moment';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent, NavbarComponent, FooterComponent, PageRibbonComponent, ErrorComponent } from './layouts';
import { MapComponent } from '../map/map.component';

@NgModule({
    imports: [
        BrowserModule,
        HopeJustFoundAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        HopeJustFoundSharedModule,
        HopeJustFoundCoreModule,
        HopeJustFoundHomeModule,
        HopeJustFoundAccountModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
        HopeJustFoundEntityModule
    ],
    declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
    providers: [
        GoogleMapsAPIWrapper,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true
        }
    ],
    bootstrap: [JhiMainComponent]
})
export class HopeJustFoundAppModule {
    constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    }
}
