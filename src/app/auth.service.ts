import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  getAuthorizationToken() {
    return 'some-auth-token';
  }
}