import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/model/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './../shared/model/recipe.model';

@Injectable()
export class RecipeService{

    /*By default its recipes array is public, but if you make it as private then you cannot access
    it from outside(you will have to access it using a method)*/
    private recipes: Recipe[] = [
        new Recipe(
            'Aaloo ka Chaloo', 
            'A super tasty snack - Just awesome!', 
            'https://upload.wikimedia.org/wikipedia/commons/5/58/Aloo_chat_Recipe.JPG',
            [
                new Ingredient('Potato', 3),
                new Ingredient('Tomato', 1),
            ]),
        new Recipe(
            'Chinese rolls', 
            'Yummy chinese starter...', 
            'http://www.fnstatic.co.uk/images/content/package/17-utterly-brilliant-avocado-recipes-that-go-beyond-guacamole.jpeg',
            [
                new Ingredient('Maggi', 1),
                new Ingredient('Tomato', 1),
            ])
      ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipe(index: number){
        return this.recipes[index];
    }

    getRecipes(){
        //return this.recipes; //if u return like this then u return the direct reference
        return this.recipes.slice(); //if u return like this it means you return a copy of it
    }

}