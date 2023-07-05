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
  <button>ROUTE TO TestRouterComponent</button>

  <p>1. on click of above button please route to TestRouterComponent which is located in router.component.ts using angular router</p>
  <p>2. please use query params to pass routingData variable to be displayed on TestRouterComponent </p>
  <p>3. please note you should route to TestRouterComponent only when you are logged in  (when the check box is checked above), if you are not logged in please route to no-access.component.ts  (when the check box is unchecked above). Please note the logic for it should be handled separately using angular concept preferably guards. </p>
  `,
  providers: [TesteventService]
})
export class Question4Component {
  routingData = "you have routed succefully."
  isLoggedIn = this.testService.isLoggedIn;
  constructor(public testService: TesteventService) {}
}
