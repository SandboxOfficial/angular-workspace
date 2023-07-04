/**QUESTION:How to supress the below error without instantiating the below service (MB) **/

import { Component } from '@angular/core';
import { FileSizePipe } from './filesize.pipe';

@Component({
  selector: 'question2',
  template: ` <h3>Q2. How to supress the below error without instantiating the below service</h3>
  
  `,
})
export class Question2Component {
  constructor(filesize: FileSizePipe) {}
}
