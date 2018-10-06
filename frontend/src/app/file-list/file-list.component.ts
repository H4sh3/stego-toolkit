import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  files:string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadFiles();
  }

  public loadFiles(){
    this.dataService.getFiles().subscribe(files => {
      this.files = files;
    });
  }

}
