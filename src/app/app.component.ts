import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  showIntro: boolean = true;

  clickStart = () => {
    console.log('start clicked');
    this.showIntro = false;
  }

  clickQuit = () => {
    console.log('quit clicked');
    this.showIntro = true;
  }
}
