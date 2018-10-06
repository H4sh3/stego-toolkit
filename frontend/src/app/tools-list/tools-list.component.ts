import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Result } from '../types';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styles: []
})
export class ToolsListComponent implements OnInit {
  @Output() runTool = new EventEmitter<string>();
  @Input() running  = false;

  constructor(private dataService: DataService) { }
  
  tools: string[];

  ngOnInit() {
    this.dataService.getToolsList().subscribe(tools => {
      this.tools = tools
    });
  }
}
