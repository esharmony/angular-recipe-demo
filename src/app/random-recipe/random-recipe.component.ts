import { Component } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-random-recipe',
  templateUrl: './random-recipe.component.html',
  styleUrls: ['./random-recipe.component.css'],
})
export class RandomRecipeComponent {
  constructor(private recipeService: RecipeService) {}

  recipe: Recipe | null = null;

  getRandomRecipe(): void {
    this.recipeService
      .getRandomRecipe()
      .subscribe((meal) => (this.recipe = meal.meals[0]));
  }

  ngOnInit(): void {
    this.getRandomRecipe();
  }
}
