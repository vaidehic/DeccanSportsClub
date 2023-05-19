import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { ManagerService } from '../manager.service';
import {Chart} from 'chart.js'


@Component({
  selector: 'app-plan-report',
  templateUrl: './plan-report.component.html',
  styleUrls: ['./plan-report.component.scss']
})
export class PlanReportComponent implements OnInit {

  chart = [];
  planNames:any=[];
  likes:any=[];
  disLikes:any=[];

  constructor(private manager:ManagerService) { }

  ngOnInit() {
    this.manager.getPlanReport().subscribe(data=>{
    console.log(data)
    this.planNames=data[0];
    this.likes=data[1];
    this.disLikes=data[2];

     this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.planNames,
        datasets: [
          {
            data: this.likes,
            label:"Likes",
            borderColor: '#3cba9f',
            fill: true
          },
          {
            data: this.disLikes,
            label:"Dislikes",
            borderColor: '#ffcc00',
            fill: true
          },
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    })

    })
  }

}
