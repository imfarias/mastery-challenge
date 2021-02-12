import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PRIME_IMPORTS} from './prime-imports';
import {TemplateComponent} from './template/template.component';

@NgModule({
    declarations: [
        TemplateComponent
    ],
    imports: [
        PRIME_IMPORTS,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        PRIME_IMPORTS,
        TemplateComponent,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: []
})
export class SharedModule {
}
