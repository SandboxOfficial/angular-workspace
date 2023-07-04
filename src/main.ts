import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { QuestionsModule } from './app/questions.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, QuestionsModule],
  template: `
    <h1>{{name}} Workspcae!</h1>
    <questions></questions>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
