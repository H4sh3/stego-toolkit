import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  @Output() fileSelected = new EventEmitter<string>();

  files: string[] = [];
  selectedFile: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadFiles();
  }

  public loadFiles() {
    this.dataService.getFiles().subscribe(files => {
      this.files = files;
      if (this.files.length > 0) { // select first file if there are files
        this.selectedFile = this.files[0];
        this.selectFile(this.files[0]);
      }
    });
  }

  selectFile(file: string) {
    this.selectedFile = file
    this.fileSelected.emit(file);
  }

  deleteFile(file: string) {
    this.dataService.deleteFile(file);
  }

  isSelected(file: string) {
    return file === this.selectedFile ? 'warn' : '';
  }

}
