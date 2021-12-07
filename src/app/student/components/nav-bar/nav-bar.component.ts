import {Component, Input, OnInit} from '@angular/core';
import {currentUser} from "../../../../data";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() activeItem: string;

  public currentUser = currentUser[0];

  constructor() { }

  ngOnInit(): void {
  }

}
