import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { ManagerService } from "../../manager/manager.service";

@Component({
  selector: "app-admin-sport-report",
  templateUrl: "./admin-sport-report.component.html",
  styleUrls: ["./admin-sport-report.component.scss"],
})
export class AdminSportReportComponent implements OnInit {
  title = "sport chart";
  BarChart = [];
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
        this.BarChart = new Chart("barChart", {
          type: "bar",
          data: {
            labels: data,
            datasets: [
              {
                label: "No. of Enrollments",
                data: data1,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.8)",
                  "rgba(54, 162, 235, 0.8)",
                  "rgba(255, 206, 86, 0.8)",
                  "rgba(75, 192, 192, 0.8)",
                  "rgba(153, 102, 255,0.8)",
                  "rgba(255, 159, 64, 0.8)",
                ],
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    max: 10,
                    min: 0,
                    stepSize: 1,
                  },
                },
              ],
            },
          },
        });
      });
    });
  }
}
