import { Component } from '@angular/core';

@Component({
  selector: 'child',
  template: ` <h3 *ngIf="displayText">Child component</h3>
  
  `,
})
export class ChildComponent {
  displayText = false;

  toggleText = (val: boolean) => (this.displayText = val);
}
