import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './share/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormComponent } from './component/form/form.component';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import { CarouselComponent } from './component/carousel/carousel/carousel.component';
import { NewsComponent } from './component/news/news.component';
import {NaviComponent} from './component/navi/navi.component';
import {AppRoutingModule} from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CarouselComponent,
    NewsComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
