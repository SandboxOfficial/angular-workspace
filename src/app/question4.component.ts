/**QUESTION: Routing **/

import { Component } from '@angular/core';
import { TesteventService } from './testEvent.service';

@Component({
  selector: 'question4',
  template: ` <h5>Q4. Routing</h5>
  <div>
   IS LOGGED IN:  <input [(ngModel)]="testService.isLoggedIn" type="checkbox" />
  </div>
  <br/>
  <button>Navigate to TestRouterComponent</button>

  <p>a. On click of above button please route to TestRouterComponent which is in router.component.ts using angular router
  <br> 
  b. Please use query params to pass ‘routingData‘ and display the same at TestRouterComponent. 
  <br> 
  c. Route the user between TestRouterComponent and NoAccessComponent respectively based on ‘isLoggedIn’ input. Please Make sure to use AuthGuards in routes.  </p>
  `,
  providers: [TesteventService],
})
export class Question4Component {
  routingData = 'you have routed succefully.';
  isLoggedIn = this.testService.isLoggedIn;
  constructor(public testService: TesteventService) {}
}
