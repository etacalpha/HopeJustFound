import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HopeJustFoundSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { HopeJustFoundEntityModule } from 'app/entities/entity.module';

@NgModule({
    imports: [HopeJustFoundSharedModule, HopeJustFoundEntityModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HopeJustFoundHomeModule {}
