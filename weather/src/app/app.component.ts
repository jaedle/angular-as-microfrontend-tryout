import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'weather-tile',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  @Input()
  public city: string | undefined;

  @Input()
  public latitude: string | undefined;

  @Input()
  public longitude: string | undefined;

  public temp: string | undefined;

  ngOnInit(): void {
    if (this.latitude === undefined || this.longitude === undefined) {
      return

    }
    this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&hourly=temperature_2m`).subscribe((data: any) => {
      this.temp = data["hourly"]["temperature_2m"][0];
    });
  }


}
