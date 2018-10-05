import { Component, OnInit } from '@angular/core';
import { ToolsService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styles: []
})
export class ToolsListComponent implements OnInit {

  constructor(private toolsService: ToolsService) { }
  
  tools: string[];
  result: string;

  ngOnInit() {
    this.toolsService.getToolsList().subscribe(tools => {
      this.tools = tools
    });
  }

  run(tool:string){
    this.toolsService.runTool(tool).subscribe(result => {
      this.result = result
    });
  }

}
