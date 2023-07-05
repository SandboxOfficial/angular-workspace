/**QUESTION: How to implement Typeahead search text box which triggers subscription after 3char keyed. Also make sure canceling effects and avoiding nested Subscriptions **/

import { Component } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { User, TesteventService } from './testEvent.service';

@Component({
  selector: 'question6',
  template: ` <h3>Q6.How to implement Typeahead search text box which triggers subscription after 3char keyed. Also make sure canceling effects and avoiding nested Subscriptions</h3>
  <ng-template #rt let-r="result" let-t="term">
  <ngb-highlight [result]="r.name" [term]="t"></ngb-highlight>
  </ng-template>
  <label for="typeahead-template">Search user:</label> {{hint}} 
  <input id="typeahead-template" type="text" class="form-control"[(ngModel)]="model" #ctrl="ngModel"  [ngbTypeahead]="search" [resultTemplate]="rt"
    [inputFormatter]="formatter" />
    <p>Keyup regular : {{typeterm}}</p>
    <p>Keyup Delayed : {{typeterm}}</p>
  `,
  providers: [TesteventService],
})
export class Question6Component {
  public model: any;
  public hint: any;
  public typeterm: any;
  constructor(private testService: TesteventService) {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      map((term: string) => {
        this.typeterm = term;
        if (term.length > 2) {
          return this.testService.users.filter((user: User) =>
            user.name.includes(term)
          );
        } else {
          this.hint = 'Type atleast 3char';
          return [];
        }
      })
    );

  formatter = (x: { name: string }) => x.name;
}
