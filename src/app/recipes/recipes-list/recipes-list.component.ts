import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Simple Test', 'https://www.ich-liebe-brot.de/media/image/Baeckere-Huth-Rezept-Bruschetta.jpg'),
    new Recipe('Another Test Recipe', 'Simple Test', 'https://www.ich-liebe-brot.de/media/image/Baeckere-Huth-Rezept-Bruschetta.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
