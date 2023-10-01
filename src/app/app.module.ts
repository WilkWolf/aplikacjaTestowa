import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandardControlsComponent } from './standard-controls/standard-controls.component';
import { ControlsDisabledComponent } from './controls-disabled/controls-disabled.component';
import { DuplicatedControlsComponent } from './duplicated-controls/duplicated-controls.component';
import { ControlsWithDynamicIDComponent } from './controls-with-dynamic-id/controls-with-dynamic-id.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StandardControlsComponent,
    ControlsDisabledComponent,
    DuplicatedControlsComponent,
    ControlsWithDynamicIDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'controlsDisabled', component: ControlsDisabledComponent },
      { path: 'standardControls', component: StandardControlsComponent },
      { path: 'duplicatedControls', component: DuplicatedControlsComponent },
      { path: 'controlsWIthDynamicID', component: ControlsWithDynamicIDComponent },
    ]),
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
