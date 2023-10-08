import { Component } from '@angular/core';

@Component({
  selector: 'app-standard-controls',
  templateUrl: './standard-controls.component.html',
  styleUrls: ['./standard-controls.component.css']
})
export class StandardControlsComponent {

  ngOnInit() {
    this.label = '';
  }

  public label: string = "";


  public changeValue(value: string) {
    this.label = value;
  }
}
