import { Injectable } from '@angular/core';
import { RestService } from '../common/rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly baseUrl: string = '/api/dashboard';

  /**
   * Constructor to inject the RestService
   * @param restService Service for HTTP requests
   */
  public constructor(private readonly restService: RestService) {}

  /**
   * Fetch dashboard data from the backend
   * @returns Observable containing the dashboard data
   */
  public getDashboardData(): Observable<any> {
    return this.restService.get<any>(`${this.baseUrl}/data`);
  }

  /**
   * Fetch specific details of a dashboard widget
   * @param widgetId ID of the widget
   * @returns Observable containing the widget data
   */
  public getWidgetDetails(widgetId: string): Observable<any> {
    return this.restService.get<any>(`${this.baseUrl}/widget/${widgetId}`);
  }
}
