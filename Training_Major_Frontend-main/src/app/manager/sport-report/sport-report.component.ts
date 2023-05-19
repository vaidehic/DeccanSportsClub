import { JsonPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { type } from "os";
import { element } from "protractor";
import { ManagerService } from "../manager.service";

@Component({
  selector: "app-sport-report",
  templateUrl: "./sport-report.component.html",
  styleUrls: ["./sport-report.component.scss"],
})
export class SportReportComponent implements OnInit {
  title = "sport chart";
  PieChart = [];
  sports: any = [];
  element: any[];
  enrollments: any;

  constructor(private manager: ManagerService) {}

  ngOnInit() {
    var count;
    this.manager.getSportForReport().subscribe((data) => {
      this.sports = data;

      this.manager.getSportcountReport().subscribe((data1) => {
        this.enrollments = data1;
        this.PieChart = new Chart("pieChart", {
          type: "doughnut",
          data: {
            labels: this.sports,
            datasets: [
              {
                label: "Sport Report",
                data: this.enrollments,
                backgroundColor: ["red", "blue", "green","yellow"],
              },
            ],
          },
          options: {
            title: { Text: "Bar Chart", display: true ,is3D: true},
            scales: { yAxes: [{ ticks: { begainAtZero: true } }] },
          },
        });
      });
    });
  }
}
