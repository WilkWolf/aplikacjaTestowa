import { Component } from '@angular/core';

@Component({
  selector: 'app-controls-duplicated-controls',
  templateUrl: './duplicated-controls.component.html',
  styleUrls: ['./duplicated-controls.component.css']
})
export class DuplicatedControlsComponent {
public label: string = "";


public changeValue(value:string){
this.label = value;
}

}
