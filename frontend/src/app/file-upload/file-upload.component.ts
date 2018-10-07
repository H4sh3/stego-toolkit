import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent{
  @Output() newUpload = new EventEmitter<void>();

  formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  constructor(private dataService: DataService, private fb: FormBuilder) { }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          file: event.target.files[0]
        });
      };
    }
  }

  upload() {
    this.dataService.uploadFile(this.formGroup.get('file').value).subscribe(res => {
      this.newUpload.emit();
    });
  }

}
