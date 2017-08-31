import { RecipeService } from './../recipe.service';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Recipe } from './../../shared/model/recipe.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  id: number;
  recipe: Recipe;
  
  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )

    /*Note - This are routing observables to which you subscribe and are managed by angular
    Hence u don't hav to unsubscribe, they automatically get unsubscribed wen component is destroyed
    Observables which you create manually have to be unsubscribed as best practice
    */
  }

  onAddToShoppingList(){
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  /* onEditRecipe(){
     this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    ../ - go back one level in url
    you can create more complex routes like this.
   }*/

}
