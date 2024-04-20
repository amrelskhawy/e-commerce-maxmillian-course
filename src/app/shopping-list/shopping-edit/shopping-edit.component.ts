import { ShoppingListService } from './../shopping-list.service';
import { Component, ElementRef,  ViewChild } from '@angular/core';
import Ingredient from 'src/app/shared/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(
    private shoppingListService: ShoppingListService
  ) {}


  onAddItem() {

    const newIngredient = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value)


    this.shoppingListService.addIngredient(newIngredient)

    
  }
}
