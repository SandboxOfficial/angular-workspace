/**QUESTION:How do we subscribe to an Observable in HTML template rather than using subscribe **/

import { Component } from '@angular/core';

@Component({
  selector: 'question6',
  template: ` 
    <h5>Q6. Display the heading h3 text in child component by calling the child component toggleText method and by passing true directly in this component and not using any service. </h5>
    <child></child>
    <button>show text</button>
  `,
})
export class Question6Component {
 
}
