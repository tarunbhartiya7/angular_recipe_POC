import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;
  
  constructor(private shoppingListService: ShoppingListService) { }
  
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription =  this.shoppingListService.ingredientsChanged.subscribe(
      (ingredient: Ingredient[]) => this.ingredients = ingredient
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
