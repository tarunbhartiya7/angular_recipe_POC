import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../../shared/model/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onRecipeSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
