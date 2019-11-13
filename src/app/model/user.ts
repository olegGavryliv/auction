import {Injectable} from '@angular/core';

@Injectable()
export class User {

   public id: bigint;
    public username: string;
    public password: string;
    public token: string;
    public email: string;

  constructor(username: string, password: string, token: string) {
    this.username = username;
    this.password = password;
    this.token = token;
  }

}
