/**QUESTION: Convert the FileSize from bytes to megabytes and append the extension (MB) 
Example: 209715200 bytes to 200MB 
**/

import { Component } from '@angular/core';

interface File {
  name: string;
  size: any;
  type: string;
}

@Component({
  selector: 'question1',
  template: ` <h5>Convert the FileSize from bytes to megabytes and append the extension (MB) </h5>
  <br>
    <table>
      <tr>
        <th>Name</th>
        <th>Size(Bytes)</th>
        <th>Size(MB)</th>
      </tr>
      <tr *ngFor="let file of files">
        <td>{{file.name}}</td>
        <td>{{ file.size }}</td>
        <td>{{ file.size }}</td>
      </tr>
  </table>
  `,
})
export class Question1Component {
  files: File[] = [
    { name: 'logo.svg', size: 2120109, type: 'image/svg' },
    { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
    { name: 'background.png', size: 1784562, type: 'image/png' },
  ];
}
