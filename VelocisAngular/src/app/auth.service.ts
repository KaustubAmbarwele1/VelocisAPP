import { Injectable } from '@angular/core';
import { flatMap, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticate : boolean = false;

  login(email : string ,password : string ): Observable<boolean>{

    if(email === 'kaustub@gmail.com' && password === 'pass@123')
    {
      this.isAuthenticate = true;
      return  of(true)
    }
    return of(false)
  }
}
