import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  // tab: number;

  // setTab(arg){
  //   //alert(arg);
  //   this.tab = arg;
  // }

  // isSet(arg){
  //   this.tab === arg;
  // }
  
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // onNewRecipe(){
  //   this.router.navigate(['new'], {relativeTo: this.route});
  // }

}
