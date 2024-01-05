import { Component } from '@angular/core';
import { Recipe } from './recipe.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  recivedRecipe: Recipe;

  onReciveRecipe(recipe: Recipe) {
    this.recivedRecipe = recipe
  }
}
