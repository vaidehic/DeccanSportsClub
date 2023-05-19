import { Component, OnInit } from "@angular/core";
import { ManagerService } from "../../manager/manager.service";
import { Chart } from "chart.js";

@Component({
  selector: "app-enrollment-report",
  templateUrl: "./enrollment-report.component.html",
  styleUrls: ["./enrollment-report.component.scss"],
})
export class EnrollmentReportComponent implements OnInit {
  title = "Enrollment chart";
  PieChart = [];
  enrollmentStatus: any;
  count;

  constructor(private manager: ManagerService) {}

  ngOnInit() {
    var count;

    this.manager.getEnrollmentReport().subscribe((data) => {
      this.enrollmentStatus = data[0];
      this.count = data[1];

      this.PieChart = new Chart("pieChart", {
        type: "pie",
        data: {
          labels: this.enrollmentStatus,
          datasets: [
            {
              label: "Sport Report",
              data: this.count,
              backgroundColor: ["red", "blue", "maroon", "orange"],
            },
          ],
        },
        options: {
          title: { Text: "PieChart", display: true, is3D: true },
          scales: { yAxes: [{ ticks: { max: 10, min: 0, stepSize: 1 } }] },
        },
      });
    });
  }
}
