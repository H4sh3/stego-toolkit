import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToolsListComponent } from './tools-list/tools-list.component';
import { ToolsService } from './data.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsListComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
