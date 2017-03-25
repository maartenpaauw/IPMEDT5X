import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opgepakt-vandaag',
  templateUrl: './opgepakt-vandaag.component.html',
  styleUrls: ['./opgepakt-vandaag.component.scss']
})
export class OpgepaktVandaagComponent implements OnInit {

  // lineChart
  public lineChartData:Array<any> = [
    {data: [10, 12, 22, 17, 31, 44, 32, 16, 6], label: 'Schoenen'}
  ];
  public lineChartLabels:Array<any> = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(52, 152, 219,0.5)',
      borderColor: 'rgba(41, 128, 185,1.0)',
      pointBackgroundColor: 'rgba(52, 152, 219,1.0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(41, 128, 185,1.0)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}

