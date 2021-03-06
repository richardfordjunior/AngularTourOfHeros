import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;


  ngOnInit() {
    console.log('Calling getHeros...')
    this.getHeroes();
  }

  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }

  //Private heroService parameter of type HeroService added to the constructor
  constructor(private heroService: HeroService) {}

  getHeroes(): void{
    this.heroes = this.heroService.getHeros();
  }
}

