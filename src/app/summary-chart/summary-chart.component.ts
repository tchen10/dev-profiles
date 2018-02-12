import {Component, OnInit} from '@angular/core';
import {JsonReaderService} from '../services/json-reader.service';
import {SummaryChartData} from './summary-chart-data.model';

@Component({
  selector: 'app-summary-chart',
  templateUrl: './summary-chart.component.html',
  styleUrls: ['./summary-chart.component.css']
})
export class SummaryChartComponent implements OnInit {
  data: SummaryChartData;
  options;

  constructor(private jsonReader: JsonReaderService) {
  }

  ngOnInit() {
    this.jsonReader.readSummary().subscribe((summaries) => {
      this.data = SummaryChartData.createChartData(summaries);
      this.options = {
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            title: function(tooltipItem, chart) {
              return tooltipItem.map((item) => {
                return chart.datasets[item.datasetIndex].label;
              }).join(', ');
            }
          }
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Rank'
              },
              ticks: {
                max: 5,
                min: 0,
                stepSize: 1,
                callback: function(value, index, values) {
                  return SummaryChartData.rankLabelFor(value);
                }
              }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: '# of Devs'
              },
              ticks: {
                max: 5,
                min: 0,
                stepSize: 1
              }
            }
          ]
        }
      };
    });
  }
}
