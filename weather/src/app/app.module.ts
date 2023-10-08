import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule, DoBootstrap} from '@angular/core';

import { AppComponent } from './app.component';
import {createCustomElement} from '@angular/elements';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
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
