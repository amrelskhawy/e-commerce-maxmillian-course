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

  addIngredient(ingredient: Ingredient) {
    this.ingredints.push(ingredient)
    this.addedIngredient.emit(this.ingredints.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredints.push(...ingredients)
    this.addedIngredient.emit(this.ingredints.slice())
  }
  
}