/**QUESTION:How do we subscribe to an Observable in HTML template rather than using subscribe **/

import { Component } from '@angular/core';
import { TesteventService } from './testEvent.service';

@Component({
  selector: 'question33',
  template: ` 
    <h5>Q3.How do we subscribe to an Observable in HTML template rather than using subscribe</h5>
    <p> Print the name of the users using getusers method in TesteventService </p>
  `,
  providers: [TesteventService],
})
export class Question3Component {
  constructor(private testService: TesteventService) {}
}
