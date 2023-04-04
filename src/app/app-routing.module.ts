import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrowseComponent } from './browse/browse.component';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'browse/:letter', component: BrowseComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
