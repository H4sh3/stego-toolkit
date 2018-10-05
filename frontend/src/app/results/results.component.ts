import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../types';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() results: Result[];

  constructor() { }

  ngOnInit() {
  }

}
