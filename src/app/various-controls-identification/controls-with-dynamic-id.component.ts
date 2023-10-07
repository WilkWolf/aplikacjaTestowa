import { Component } from '@angular/core';


@Component({
  selector: 'app-controls-various-controls-identification',
  templateUrl: './various-controls-identification.component.html',
  styleUrls: ['./various-controls-identification.component.css']
})
export class VariousControlsIdentificationComponent {
  public zmienneID: number = 0;

  constructor() {
    this.zmienneID = Math.floor(Math.random() * 1000000);
  }

  changeId() {
    var currentID = this.zmienneID;
    while (currentID == this.zmienneID) {
      this.zmienneID = Math.floor(Math.random() * 1000000);
    }
  }

}
