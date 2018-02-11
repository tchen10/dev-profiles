export interface ChartData {
  datasets: ChartDataSet[];
}

interface ChartDataSet {
  label: string;
  data: { x: string, y: string }[];
}
