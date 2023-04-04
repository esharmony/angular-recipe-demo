import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Meal, Recipe } from './recipe';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private randomRecipeUrl =
    'https://www.themealdb.com/api/json/v1/1/random.php';

  private recipeUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php';

  private searchRecipeUrl =
    'https://www.themealdb.com/api/json/v1/1/search.php';

  private standardPartOferrorMessage =
    'Sorry there has been an error, please add an issue to our github repository https://github.com/esharmony/angular-recipe-demo/issues with the info:';

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.errorService.setErrorMessage(
        `${this.standardPartOferrorMessage} \n ${JSON.stringify(error.message)}`
      );
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      return of(result as T);
    };
  }

  getRecipe(id: number): Observable<Meal> {
    const url = `${this.recipeUrl}?i=${id}`;
    return this.http
      .get<Meal>(url)
      .pipe(
        catchError(this.handleError<Meal>(`getRecipe id=${id}`, { meals: [] }))
      );
  }

  getRandomRecipe(): Observable<Meal> {
    return this.http
      .get<Meal>(this.randomRecipeUrl)
      .pipe(
        catchError(this.handleError<Meal>('getRandomRecipe', { meals: [] }))
      );
  }

  searchRecipes(term: string): Observable<Recipe[]> {
    if (!term.trim() || term.trim().length < 3) {
      return of([]);
    }
    return this.http
      .get<Meal>(`${this.searchRecipeUrl}?s=${term}`)

      .pipe(
        map((meal: Meal) => meal.meals),
        catchError(this.handleError<Recipe[]>('searchRecipes', []))
      );
  }

  browseRecipes(letter: string): Observable<Recipe[]> {
    if (!letter.trim()) {
      letter = 'A';
    }
    return this.http.get<Meal>(`${this.searchRecipeUrl}?f=${letter}`).pipe(
      map((meal: Meal) => meal.meals),
      catchError(this.handleError<Recipe[]>('browseRecipes', []))
    );
  }
}
