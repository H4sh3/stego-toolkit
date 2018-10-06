import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-files-container',
  templateUrl: './files-container.component.html',
  styleUrls: ['./files-container.component.css']
})
export class FilesContainerComponent implements OnInit {
  @Output() fileSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
