import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public dashboardData: any;
  public widgetDetails: any;

  public constructor(private readonly dashboardService: DashboardService) {}

  public ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.dashboardService.getDashboardData().subscribe(data => {
      this.dashboardData = data;
    });
  }

  public loadWidgetDetails(widgetId: string): void {
    this.dashboardService.getWidgetDetails(widgetId).subscribe(details => {
      this.widgetDetails = details;
    });
  }
}
