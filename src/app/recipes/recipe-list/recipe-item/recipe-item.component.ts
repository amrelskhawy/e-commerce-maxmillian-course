import { Component ,Input } from '@angular/core';
import { Recipe } from '../../recipe.module';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe

  constructor(private recipeService: RecipeService) {}

  onRecipeSelected() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }
}
