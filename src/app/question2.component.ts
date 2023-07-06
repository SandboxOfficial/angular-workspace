/**QUESTION:How to supress the below error without instantiating the below service (MB) **/

import { Component } from '@angular/core';
import { TesteventService } from './testEvent.service';

@Component({
  selector: 'question22',
  template: ` <h5>Q2. How to supress the below error without instantiating the below service</h5>
  
  `,
})
export class Question2Component {
  isLoggedIn = this.eventService.isLoggedIn;
  constructor(private eventService: TesteventService) {
    console.log(this.isLoggedIn);
  }
}
