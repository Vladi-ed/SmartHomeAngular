import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {Widget} from '../Classes/Widget';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe([
    Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge
  ]).pipe(
    map(({ breakpoints }) => {
      if (breakpoints[Breakpoints.XSmall]) {
        return [
          new Widget('Graph 1', 4, 1),
          new Widget('Graph 2', 4, 1),
          new Widget('Table', 4, 2),
        ];
      }
      if (breakpoints[Breakpoints.Small] || breakpoints[Breakpoints.Medium]) {
        return [
          new Widget('Graph 1', 2, 1, 'graph'),
          new Widget('Graph 2', 2, 1),
          new Widget('Table', 4, 2),
        ];
      }

      return [
        new Widget('Graph 1', 1, 1, 'graph'),
        new Widget('Graph 2', 1, 1),
        new Widget('Graph 3', 1, 1),
        new Widget('Graph 4', 1, 1),
        new Widget('Table', 4, 2),
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
