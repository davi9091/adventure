import { Component, OnInit } from '@angular/core';
import { GameEntityComponent } from 'src/app/common/game-entity/game-entity.component';
import { IItem } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent extends GameEntityComponent implements OnInit {

  private content: IItem = null;

  ngOnInit() {
  }

}
