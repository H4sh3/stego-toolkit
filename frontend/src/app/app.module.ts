import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToolsListComponent } from './tools-list/tools-list.component';
import { ToolsService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
