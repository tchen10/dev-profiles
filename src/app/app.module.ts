import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ChartModule} from 'angular2-chartjs';
import {JsonReaderService} from './services/json-reader.service';
import {HttpClientModule} from '@angular/common/http';
import { SummaryTableComponent } from './summary-table/summary-table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { SummaryChartComponent } from './summary-chart/summary-chart.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app-routing.module';
import {TechRadarComponent} from './tech-radar/tech-radar.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryTableComponent,
    SummaryChartComponent,
    TechRadarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    ChartModule,
    TableModule
  ],
  providers: [
    JsonReaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
