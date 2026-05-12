import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weathers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weathers.component.html',
  styleUrl: './weathers.component.css'
})
export class WeathersComponent {

  city = '';
  current: any;
  forecast: any[] = [];
  constructor(private weather_services:WeatherService, private router: Router){}
  search() {
  if (!this.city) return;

  this.weather_services.getCurrent(this.city).subscribe({
    next: (res: any) => {
      console.log('CURRENT:', res);
      this.current = res;
    },
    error: (err) => {
      console.error('Current error', err);
      alert('API key not active / City not found');
    }
  });

  this.weather_services.getForecast(this.city).subscribe({
    next: (res: any) => {
      console.log('FORECAST:', res);
      this.forecast = res.list.slice(0, 5);
    },
    error: (err) => {
      console.error('Forecast error', err);
    }
  });
}
  goHome() {
  this.router.navigate(['']);
}
}
