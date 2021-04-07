import {RouterModule, Routes} from '@angular/router';
import {CarouselComponent} from './component/carousel/carousel/carousel.component';
import {NewsComponent} from './component/news/news.component';
import {NgModule} from '@angular/core';
import {FormComponent} from './component/form/form.component';
import {CanvaComponent} from './component/canva/canva.component';
import {NaviComponent} from './component/navi/navi.component';
import {HomeComponent} from './component/home/home.component';
import {MatFormFieldComponent} from './component/form/mat-form-field/mat-form-field.component';
import {MatStepperComponent} from './component/form/mat-stepper/mat-stepper.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'navi', component: NaviComponent },
  {path: 'carousel', component: CarouselComponent },
  {path: 'news', component: NewsComponent },
  {path: 'form', component: FormComponent, children: [
      {path: '', redirectTo: 'mat-stepper', pathMatch: 'full'},
      {path: 'mat-form-field', component: MatFormFieldComponent },
      {path: 'mat-stepper', component: MatStepperComponent },
    ]},
  {path: 'canva', component: CanvaComponent },
  {path: '**', redirectTo: 'home' },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
