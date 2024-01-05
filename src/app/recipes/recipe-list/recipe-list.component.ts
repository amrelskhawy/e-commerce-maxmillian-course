import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  @Output() recipeSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1',
      'This is simply a text', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe 2',
      'This is simply a text', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe 3',
      'This is simply a text', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ]

  onRecipeSelected(selectedRecipe: Recipe) {
    this.recipeSelected.emit(selectedRecipe)
  }

}
