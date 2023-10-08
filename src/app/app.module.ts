import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandardControlsComponent } from './standard-controls/standard-controls.component';
import { DuplicatedControlsComponent } from './duplicated-controls/duplicated-controls.component';
import { VariousControlsIdentificationComponent } from './various-controls-identification/controls-with-dynamic-id.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StandardControlsComponent,
    DuplicatedControlsComponent,
    VariousControlsIdentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'standardControls', component: StandardControlsComponent },
      { path: 'duplicatedControls', component: DuplicatedControlsComponent },
      { path: 'controlsWIthDynamicID', component: VariousControlsIdentificationComponent },
      { path: '', redirectTo: 'standardControls', pathMatch: 'full' },
      { path: '**', redirectTo: 'standardControls', pathMatch: 'full' },
    ]),
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
