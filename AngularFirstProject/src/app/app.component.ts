import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  {id: 11, name: 'Ben'},
  {id: 12, name: 'Person'},
  {id: 13, name: 'Other Guy'},
  {id: 14, name: 'Batman'},
  {id: 15, name: 'Spiderman'},
  {id: 16, name: 'Wonder Woman'},
  {id: 17, name: 'Someone'},
  {id: 18, name: 'Hello World'}, 
  {id: 19, name: 'Friend'}, 
  {id: 20, name: 'SpongeBob'}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heroes App';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

