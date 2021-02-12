import {NgModule} from '@angular/core';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        HomeRoutingModule,
        ReactiveFormsModule
    ]
})
export class HomeModule {
}
