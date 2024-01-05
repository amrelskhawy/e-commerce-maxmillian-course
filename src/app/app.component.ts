import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';

  feateredSelected: string;

  onNavigate(path: string) {
    this.feateredSelected = path
  }
}
