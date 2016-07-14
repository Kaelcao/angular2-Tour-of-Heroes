import {Component} from '@angular/core';
import {HeroesComponent} from './heroes.component';
import {HeroService}from './hero.service';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'my-app',
    directives: [HeroesComponent, ROUTER_DIRECTIVES],
    providers: [HeroService],
    styleUrls: ['app/app.component.css'],
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
            <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
        `
})

export class AppComponent {
    title:string = "Tour of Heroes";
}
