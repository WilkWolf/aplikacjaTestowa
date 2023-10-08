import { Component } from '@angular/core';

@Component({
  selector: 'app-standard-controls',
  templateUrl: './standard-controls.component.html',
  styleUrls: ['./standard-controls.component.css']
})
export class StandardControlsComponent {


  public myLabel: string = "";


  ngOnInit() {
    this.myLabel = '';
  }
  foo(text: string) {
    this.myLabel = text;
  }
}
