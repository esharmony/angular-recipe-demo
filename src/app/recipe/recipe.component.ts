import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from '../error.service';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

interface Ingredient {
  name: string;
  amount: string | null;
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent {
  /**
   *
   */
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    public errorService: ErrorService
  ) {}

  @Input() recipe?: Recipe;

  ingredients: Ingredient[] = [];

  ngOnInit(): void {
    this.getRecipe();
  }

  handleRecipe(recipe: Recipe) {
    this.recipe = recipe;
    this.createIngredients(recipe);

    console.log(recipe);
  }

  getRecipe(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService
      .getRecipe(id)
      .subscribe((meal) => this.handleRecipe(meal.meals[0]));
  }

  createIngredients(recipe: Recipe) {
    let count = 20;
    const ingredients: Ingredient[] = [];
    while (count > 0) {
      const ingredientName: string = `strIngredient${count}`;
      const ingredientAmount: string = `strMeasure${count}`;

      if (recipe[ingredientName] !== null && recipe[ingredientName] !== '') {
        ingredients.push({
          name: recipe[ingredientName],
          amount: recipe[ingredientAmount],
        } as Ingredient);
      }
      count--;
    }
    this.ingredients = ingredients.reverse();
  }
}
