import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* Don't use the new keyword for services, it will create a new one each time
    What if the service caches heroes and shares that cache with others? you couldn't do that.
    By using DI the Service will be a singleton. 
    Angular component lifeccle: at creation, after each change, and at its eventual destruction
*/
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  title = 'Heroes App';
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

