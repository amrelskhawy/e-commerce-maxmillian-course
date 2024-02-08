import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.module";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()
  
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1',
      'This is simply a text', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another One to Test',
      'This is simply a text', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Third Recipe',
      'This is simply a text', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ]


  getRecipes() {
    return this.recipes.slice()
  }
}