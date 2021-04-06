import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-canva',
  templateUrl: './canva.component.html',
  styleUrls: ['./canva.component.css']
})
export class CanvaComponent implements OnInit {
  public vote: number;
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }
like(){
    this.counter++;
    console.log(this.counter);
}
}
