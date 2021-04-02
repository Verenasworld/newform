import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  constructor() { }

  ngOnInit(): void {
  }
goto(){
    window.open("https://verenasworld.github.io/simplydashboarddesign/contactmanager", "_blank");
}
  gotosearch(){
    window.open("https://verenasworld.github.io/monsters-rolodex/", "blank");
  }
}
