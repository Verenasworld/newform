import {RouterModule, Routes} from '@angular/router';
import {CarouselComponent} from './component/carousel/carousel/carousel.component';
import {NewsComponent} from './component/news/news.component';
import {NgModule} from '@angular/core';
import {FormComponent} from './component/form/form.component';
import {CanvaComponent} from './component/canva/canva.component';

const routes: Routes = [
  {path: 'carousel', component: CarouselComponent },
  {path: 'news', component: NewsComponent },
  {path: 'form', component: FormComponent },
  {path: 'canva', component: CanvaComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
