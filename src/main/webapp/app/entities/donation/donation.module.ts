import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HopeJustFoundSharedModule } from 'app/shared';
import { HopeJustFoundAdminModule } from 'app/admin/admin.module';
import {
    DonationComponent,
    DonationDetailComponent,
    DonationUpdateComponent,
    DonationDeletePopupComponent,
    DonationDeleteDialogComponent,
    donationRoute,
    donationPopupRoute
} from './';

const ENTITY_STATES = [...donationRoute, ...donationPopupRoute];

@NgModule({
    imports: [HopeJustFoundSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        DonationComponent,
        DonationDetailComponent,
        DonationUpdateComponent,
        DonationDeleteDialogComponent,
        DonationDeletePopupComponent
    ],
    entryComponents: [DonationComponent, DonationUpdateComponent, DonationDeleteDialogComponent, DonationDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
        DonationComponent,
        DonationDetailComponent,
        DonationUpdateComponent,
        DonationDeleteDialogComponent,
        DonationDeletePopupComponent
    ]
})
export class HopeJustFoundDonationModule {}
