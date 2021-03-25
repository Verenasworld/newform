import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slides = [
    {image: 'https://s8.directupload.net/images/210324/jrwc5r6m.jpg'},
    {image: 'https://s18.directupload.net/images/210324/iiyxr8q4.png'},
    {image: 'https://s8.directupload.net/images/210324/m8b3t7lo.jpg'},
    {image: 'https://s16.directupload.net/images/210324/y2omg2op.png'},
    {image: 'https://s18.directupload.net/images/210324/r6ljxzlr.png'}];
  constructor() { }

  ngOnInit(): void {
  }
}
