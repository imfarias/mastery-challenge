import {Component, ContentChild, OnInit} from '@angular/core';
import {MegaMenuItem} from 'primeng/api';

@Component({
    selector: 'app-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

    @ContentChild('router') router: any;

    itensMenu: MegaMenuItem[] = [
        {
            icon: 'pi pi-fw pi-home',
            label: 'Página Inicial',
            routerLink: '/'
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
