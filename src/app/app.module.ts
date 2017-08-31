import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { DropdownDirective } from './shared/dropdown/dropdown.directive';
import { NumberDecimalDirective } from './shared/numbers-with-dedimal/number-decimal.directive';
import { ComaFormatterDirective } from './shared/coma-formatter/coma-formatter.directive';
import { NumbersOnlyDirective } from './shared/numbers-only/numbers-only.directive';
import { BasicHighlightDirective } from './shared/basic-highlight/basic-highlight.directive';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BetterHighlightDirective } from './shared/better-highlight/better-highlight.directive';
import { BestHighlightDirective } from './shared/best-highlight/best-highlight.directive';
import { MaxlengthDirective } from './shared/maxlength/maxlength.directive';
import { DirectivesExamplesComponent } from './directives-examples/directives-examples.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  {}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    BestHighlightDirective,
    NumbersOnlyDirective,
    ComaFormatterDirective,
    NumberDecimalDirective,
    MaxlengthDirective,
    DirectivesExamplesComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
