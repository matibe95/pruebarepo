import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const emptyIdGuard: CanActivateFn = (route, state) => {
  const currentUrl = state.url.split('/')
  const lastItem = currentUrl.length - 1
  
  // if (!currentUrl[lastItem]) return false;
  // console.log(currentUrl[lastItem])
  // if (currentUrl[lastItem] == null){
  //   console.log(currentUrl[lastItem])
  //   return false
  // }
  return true;
};
