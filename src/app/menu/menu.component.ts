import { Component, OnInit } from '@angular/core';
import { IMenuAction } from '../models/menu-action';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  public menuActions: IMenuAction[];

  constructor() {
  }

  ngOnInit() {
    this.initButtons();
  }

  private initButtons() {
    this.menuActions = [
      {
        name: 'exit',
        action: () => {
          // Exit to main menu
        }
      },
      {
        name: 'inventory',
        action: () => {
          // Open inventory
        }
      }
    ];
  }

}
