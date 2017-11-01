import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

//component decorator requires a selector and template/templateUrl
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Heroes App';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}