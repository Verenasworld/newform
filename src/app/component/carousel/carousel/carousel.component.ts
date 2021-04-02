import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation} from '@angular/animations';
import { scaleIn, scaleOut} from './carousel.animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(scaleIn, {params: { time: '1300ms' }} )]),
      transition('* => void', [useAnimation(scaleOut, {params: { time: '1300ms' }})]),
    ])
  ]
})
export class CarouselComponent implements OnInit {
  slides = [
    {image: 'https://s8.directupload.net/images/210324/jrwc5r6m.jpg'},
    {image: 'https://s18.directupload.net/images/210324/iiyxr8q4.png'},
    {image: 'https://s8.directupload.net/images/210324/m8b3t7lo.jpg'},
    {image: 'https://s16.directupload.net/images/210324/y2omg2op.png'},
    {image: 'https://s18.directupload.net/images/210324/r6ljxzlr.png'}];

  public keksislide = [
    { src : 'https://s18.directupload.net/images/210324/r6ljxzlr.png'},
    { src : 'https://s18.directupload.net/images/210324/iiyxr8q4.png'},
    { src : 'https://s8.directupload.net/images/210324/m8b3t7lo.jpg'},
    { src : 'https://s8.directupload.net/images/210324/jrwc5r6m.jpg'},
    { src : 'https://s18.directupload.net/images/210324/iiyxr8q4.png'},
  ];
  currentSlide = 0;
  constructor() { }
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.currentSlide);
  }

  ngOnInit(): void {
  }
}
