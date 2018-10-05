import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ToolsService } from '../data.service';
import { Result } from '../types';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styles: []
})
export class ToolsListComponent implements OnInit {
  @Output() returnResults = new EventEmitter<Result>();

  constructor(private toolsService: ToolsService) { }
  
  tools: string[];

  ngOnInit() {
    this.toolsService.getToolsList().subscribe(tools => {
      this.tools = tools
    });
  }

  run(tool:string){
    this.toolsService.runTool(tool).subscribe(result => {
      this.returnResults.emit({tool:tool,output:result});
    });
  }

}
