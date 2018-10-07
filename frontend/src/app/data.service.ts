import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getToolsList() {
    return this.http.get<string[]>('/api/tools')
  }

  runTool(tool: string,selectedFile:string) {
    return this.http.get<string>(`/api/run?filename=${selectedFile}&tool=${tool}`)
  }

  getFiles() {
    return this.http.get<string[]>(`/api/files`)
  }

  uploadFile(file){
    var formData: FormData = new FormData();
    formData.append("file", file, file.name);
    return this.http.post('/api/upload',formData)
  }

  deleteFile(file: string) {
    return this.http.delete(`/api/deletefile/${file}`)
  }

}
