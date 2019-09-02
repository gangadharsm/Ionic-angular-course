import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    console.log('ngOnInit recipes List page');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter recipes List page');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter recipes List page');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave recipes List page');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave recipes List page');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy recipes List page');
  }

}
