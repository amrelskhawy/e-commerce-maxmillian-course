import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[];

  constructor(private RecipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.RecipeService.getRecipes()
  }


}
