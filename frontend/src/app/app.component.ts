import { Component } from '@angular/core';
import { Result } from './types';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile: string = '';
  results: Result[] = [];
  running: boolean = false;

  constructor(private dataService: DataService) { }

  newResult(result: Result) {
    this.results = [...this.results,result]
  }

  fileSelected(file:string){
    this.selectedFile = file;
  }

  runTool(tool: string) {
    this.running = true;
    this.dataService.runTool(tool,this.selectedFile).subscribe(output => {
      this.newResult({tool:tool,file:this.selectedFile,output:output})
      this.running = false;
    })
  }
}
