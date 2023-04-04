import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent {
  recipes$!: Observable<Recipe[]>;
  private letter = new Subject<string>();

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  changeLetter(letter: string): void {
    this.letter.next(letter);
  }

  ngOnInit(): void {
    this.recipes$ = this.letter.pipe(
      distinctUntilChanged(),
      switchMap((letter: string) => {
        return this.recipeService.browseRecipes(letter);
      })
    );
    this.route.params.subscribe(() => {
      this.letter.next(this.route.snapshot.paramMap.get('letter') as string);
    });
  }

  ngAfterViewInit(): void {
    this.letter.next(this.route.snapshot.paramMap.get('letter') || 'A');
  }
}
