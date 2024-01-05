import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import Ingredient from 'src/app/shared/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  @Output() itemAdded = new EventEmitter<Ingredient>()

  onAddItem() {

    const newIngredient = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value)
    this.itemAdded.emit(newIngredient)
  }
}
