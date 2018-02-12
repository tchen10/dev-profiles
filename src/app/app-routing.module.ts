import {Routes} from '@angular/router';
import {SummaryTableComponent} from './summary-table/summary-table.component';
import {SummaryChartComponent} from './summary-chart/summary-chart.component';

export const appRoutes: Routes = [
  { path: 'summary', component: SummaryTableComponent },
  { path: 'chart', component: SummaryChartComponent },
  { path: '', redirectTo: '/summary', pathMatch: 'full' }
];
