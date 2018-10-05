import { Component } from '@angular/core';
import { Result } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results:Result[] = []

  newResult(result:Result){
    this.results = [result,...this.results]
  }
}
