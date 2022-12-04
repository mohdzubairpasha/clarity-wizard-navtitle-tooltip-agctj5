import { Component, ViewChild } from '@angular/core';
import { Wizard } from 'clarity-angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild("wizard") wizard: Wizard;
  _open: boolean = true;

  open() {
      this._open = !this.open;
  }
}
