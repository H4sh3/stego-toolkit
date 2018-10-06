import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap,catchError,map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getToolsList(){
    return this.http.get<string[]>('/api/tools')
  }

  runTool(tool:string){
    return this.http.get<string>(`/api/run?filename=husky.png&tool=${tool}`)
  }

  getFiles(){
    return this.http.get<string[]>(`/api/files`)
  }

}
