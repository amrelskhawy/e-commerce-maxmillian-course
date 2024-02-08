import { Component, OnInit } from '@angular/core';
import Ingredient from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredints : Ingredient[]

  constructor(private shopListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredints = this.shopListService.getIngredients()
    this.shopListService.addedIngredient.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredints = ingredients
      }
    )
  }

  OnIngredientAdded(ingredient: Ingredient) {
    // this.shopListService.
  }
}
