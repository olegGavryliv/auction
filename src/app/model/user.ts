import {Injectable} from '@angular/core';

@Injectable()
export class User {
  constructor(
    public username: string,
    public password: string,
    public token: string
    ) {}
}
