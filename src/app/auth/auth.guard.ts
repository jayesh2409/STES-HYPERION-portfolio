import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  // ...
}

export const authGuard: CanActivateFn = (route, state) => {
  return true; // Your logic here
};