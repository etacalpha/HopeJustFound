import { NgModule } from '@angular/core';

import { HopeJustFoundSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';
import { MapComponent } from '../../map/map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        HopeJustFoundSharedLibsModule,
        FormsModule,
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyBQQMgReb43TBFMXZgMBjSpa4Gku8PwlTU' }), // <---
        NgbModule.forRoot() // <---
    ],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent, MapComponent],
    exports: [HopeJustFoundSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent, MapComponent],
    providers: [GoogleMapsAPIWrapper]
})
export class HopeJustFoundSharedCommonModule {}
