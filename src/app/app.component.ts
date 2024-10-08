import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../services/data.service';
import { NgForOf } from '@angular/common';
import more from 'highcharts/highcharts-more'
import * as Highcharts from 'highcharts';
more(Highcharts);


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public title = 'pleno-angular-test';
  public points: any[] = [];

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data :any) => {
      Object.keys(data).forEach(key => {
        const point = JSON.parse(data[key]);
        this.points.push(point);
        console.log(point);
      });
    });

  }
}
