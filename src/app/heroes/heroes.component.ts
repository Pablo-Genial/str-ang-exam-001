import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';
import { HeroService } from '../model/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  @Input() phraseString: string = '';
  @Input() heroes: Hero[] = [];

  phrase: string = '';

  heroList$: BehaviorSubject<Hero[]> = this.heroService.list$;

  constructor(
    private heroService: HeroService,
  ) { }


    onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
    this.heroService.getAll();
  }

}
