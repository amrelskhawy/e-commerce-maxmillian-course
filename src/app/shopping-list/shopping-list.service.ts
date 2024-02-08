import { EventEmitter } from "@angular/core";
import Ingredient from "../shared/ingredient.module";

export class ShoppingListService {

  addedIngredient = new EventEmitter<Ingredient[]>()

  ingredints: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]

  getIngredients() {
    return this.ingredints.slice()
  }

  addIngredients(ingredint: Ingredient) {
    this.ingredints.push(ingredint)
    this.addedIngredient.emit(this.ingredints.slice())
  }
}