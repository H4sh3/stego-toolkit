import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Output() newUpload = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  upload(f){
    const file = f.target.files[0]
    var formData: FormData = new FormData();
    formData.append("file", file, file.name);
    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", (ev: ProgressEvent) => {
      
    });
    xhr.open("POST", "/api/upload", true);
    xhr.send(formData);
    this.newUpload.emit();
  }

}
