import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-entity',
  templateUrl: './game-entity.component.html',
  styleUrls: ['./game-entity.component.less'],
})
export class GameEntityComponent implements OnInit {
  @Input() type: string;

  ngOnInit(): void {
  }

  getClasses() {
    const res = {};

    res[this.type] = true;
    res['active-text'] = true;

    return res;
  }

}
