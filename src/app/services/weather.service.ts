import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
     private apiKey = '7b924c66f509ea0dc283d5c8036053f9';
  private currentUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';


  constructor(private http: HttpClient) { }
 getCurrent(city: string) {
    return this.http.get(
      `${this.currentUrl}?q=${city}&appid=${this.apiKey}&units=metric`
    );
  }

  getForecast(city: string) {
    return this.http.get(
      `${this.forecastUrl}?q=${city}&appid=${this.apiKey}&units=metric`
    );
  }
}
