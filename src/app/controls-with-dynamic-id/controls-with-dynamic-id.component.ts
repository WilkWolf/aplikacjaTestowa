import { Component } from '@angular/core';


@Component({
  selector: 'app-controls-with-dynamic-id',
  templateUrl: './controls-with-dynamic-id.component.html',
  styleUrls: ['./controls-with-dynamic-id.component.css']
})
export class ControlsWithDynamicIDComponent {
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
