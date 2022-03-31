import {Component, Input, OnInit} from '@angular/core';
import { MainService } from 'src/app/share/main.service';
import { proUser } from 'src/types';
import {currentUser} from "../../../../data";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() activeItem: string | undefined;

  public currentUser: proUser | undefined;

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.getCurrentUser()
    .subscribe(user => {
      this.currentUser = user;
    })
  }

}
