import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Result } from '../types';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styles: []
})
export class ToolsListComponent implements OnInit {
  @Output() returnResults = new EventEmitter<Result>();

  constructor(private dataService: DataService) { }
  
  tools: string[];
  running: boolean = false;

  ngOnInit() {
    this.dataService.getToolsList().subscribe(tools => {
      this.tools = tools
    });
  }

  run(tool:string){
    this.running = true;
    this.dataService.runTool(tool).subscribe(result => {
      this.returnResults.emit({tool:tool,output:result});
      this.running = false;
    });
  }

}
