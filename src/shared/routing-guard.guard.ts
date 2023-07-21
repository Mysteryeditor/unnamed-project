import { CanActivateFn, Router,Route } from '@angular/router';

export const routingGuardGuard: CanActivateFn = (route, state) => {
  const tokenLogin=localStorage.getItem('token');
  if(tokenLogin){
    return true;
  }
  alert('Login To View Tasks');
  return false;
};

