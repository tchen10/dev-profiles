import {Routes} from '@angular/router';
import {SummaryTableComponent} from './summary-table/summary-table.component';
import {SummaryChartComponent} from './summary-chart/summary-chart.component';
import {TechRadarComponent} from './tech-radar/tech-radar.component';

export const appRoutes: Routes = [
  { path: 'summary', component: SummaryTableComponent },
  { path: 'chart', component: SummaryChartComponent },
  { path: 'radar', component: TechRadarComponent },
  { path: '', redirectTo: '/summary', pathMatch: 'full' }
];
