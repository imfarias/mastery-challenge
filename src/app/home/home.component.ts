import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    form: FormGroup;

    constructor(protected formBuilder: FormBuilder) {
        this.initForm();
    }

    ngOnInit(): void {
    }

    initForm(): void {
        this.form = this.formBuilder.group({
            grupo: [
                null,
                [
                    Validators.required,
                    Validators.min(7),
                    Validators.max(7)
                ]
            ]
        });
    }

}
