import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-navigation',
  templateUrl: './recipe-navigation.component.html',
  styleUrls: ['./recipe-navigation.component.css'],
})
export class RecipeNavigationComponent {
  constructor(private router: Router, private location: Location) {}

  getFirstPath() {
    const routes = this.router.url.split('/');
    return routes[1];
  }

  getSecondPath() {
    const routes = this.router.url.split('/');
    return routes[2];
  }

  back() {
    this.location.back();
  }

  alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
}
