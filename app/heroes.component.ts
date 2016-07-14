import {Component, OnInit} from '@angular/core';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import {Router} from "@angular/router";


@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    templateUrl: 'app/heroes.component.html',
    styleUrls: ["app/heroes.component.css"]
})
export class HeroesComponent implements OnInit {

    title:string = "Tour of Heroes";
    selectedHero:Hero;
    heroes:Hero[];

    constructor(private heroService:HeroService,
                private router:Router) {
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit():void {
        this.getHeroes();
    }
    gotoDetail (){
        let link = ['./detail',this.selectedHero.id];
        this.router.navigate(link);
    }
}
