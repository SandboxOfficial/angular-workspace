/**QUESTION: How to implement Typeahead search text box which triggers subscription after 3char keyed. Also make sure canceling effects and avoiding nested Subscriptions **/

import { Component } from '@angular/core';
import { debounceTime, map, Observable } from 'rxjs';
import { User, TesteventService } from './testEvent.service';

@Component({
  selector: 'question6',
  template: ` <h3>Q6.How to implement Typeahead search text box which triggers subscription after 3char keyed. Also make sure canceling effects and avoiding nested Subscriptions</h3>
  <ng-template #rt let-r="result" let-t="term">
  <ngb-highlight [result]="r.name" [term]="t"></ngb-highlight>
  </ng-template>
  <label for="typeahead-template">Search user:</label>  {{search}}
  <input id="typeahead-template" type="text" class="form-control"[(ngModel)]="model" #ctrl="ngModel"  [ngbTypeahead]="search" [resultTemplate]="rt"
    [inputFormatter]="formatter" />
  `,
  providers: [TesteventService],
})
export class Question6Component {
  public model: any;
  public typeterm: any;
  constructor(private testService: TesteventService) {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(1000),
      map((term: string) => {
        this.typeterm = term;
        term.length > 2
          ? this.testService.users.filter((user: User) =>
              user.name.includes(term)
            )
          : [];
      })
    );

  formatter = (x: { name: string }) => x.name;
}
