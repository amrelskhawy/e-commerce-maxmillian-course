import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe
  @Output() recipeSelected = new EventEmitter<void>();

  onRecipeSelected() {
    console.log(this.recipe.name);
    this.recipeSelected.emit()
  }
}
