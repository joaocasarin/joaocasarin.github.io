import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  show: boolean = true;

  openSlideMenu() {
    document.getElementById('menu').style.width = '250px';
    document.getElementById('body').style.marginLeft = '250px';
    this.show = !this.show;
  }
  closeSlideMenu() {
    document.getElementById('menu').style.width = '0';
    document.getElementById('body').style.marginLeft = '0';
    this.show = !this.show;
  }
}
