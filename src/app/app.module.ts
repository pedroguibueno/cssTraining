import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CompositionComponent } from './composition/composition.component';
import { FeaturesComponent } from './features/features.component';
import { TourComponent } from './tour/tour.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    AboutComponent,
    CompositionComponent,
    FeaturesComponent,
    TourComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
