import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlsEnabledComponent } from './controls-enabled/controls-enabled.component';
import { ControlsDisabledComponent } from './controls-disabled/controls-disabled.component';
import { ControlsWithStaticIdComponent } from './controls-with-static-id/controls-with-static-id.component';
import { ControlsWithDynamicIDComponent } from './controls-with-dynamic-id/controls-with-dynamic-id.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ControlsEnabledComponent,
    ControlsDisabledComponent,
    ControlsWithStaticIdComponent,
    ControlsWithDynamicIDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'controlsDisabled', component: ControlsDisabledComponent },
      { path: 'controlsEnabled', component: ControlsEnabledComponent },
      { path: 'controlsWithStaticID', component: ControlsWithStaticIdComponent },
      { path: 'controlsWIthDynamicID', component: ControlsWithDynamicIDComponent },
    ]),
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
