import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RecipeNavigationComponent } from './recipe-navigation/recipe-navigation.component';
import { RandomRecipeComponent } from './random-recipe/random-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './truncate';
import { RecipeComponent } from './recipe/recipe.component';
import { ErrorComponent } from './error/error.component';
import { SplitOnPeriodPipe } from './splitOnPeriod';
import { SearchComponent } from './search/search.component';
import { BrowseComponent } from './browse/browse.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    RecipeNavigationComponent,
    RandomRecipeComponent,
    TruncatePipe,
    RecipeComponent,
    ErrorComponent,
    SplitOnPeriodPipe,
    SearchComponent,
    BrowseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
