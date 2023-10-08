import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule, DoBootstrap} from '@angular/core';

import { AppComponent } from './app.component';
import {createCustomElement} from '@angular/elements';
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const customComponent = createCustomElement(AppComponent, {injector});
    customElements.define('weather-tile', customComponent);
  }
  public ngDoBootstrap(appRef: any): void {
    if (document.querySelector('weather-tile')) {
      appRef.bootstrap(AppComponent);
    }
  }
}
