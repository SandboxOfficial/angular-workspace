import { Injectable } from '@angular/core';
import { of } from 'rxjs';
export interface User {
  id: number;
  name: string;
}
@Injectable()
export class TesteventService {
  public isLoggedIn = false;
  private users = [
    {
      id: 1,
      name: 'john doe',
    },
    {
      id: 2,
      name: 'gram smith',
    },
    {
      id: 3,
      name: 'will jones',
    },
  ];

  public getUsers = () => of(this.users);
}
