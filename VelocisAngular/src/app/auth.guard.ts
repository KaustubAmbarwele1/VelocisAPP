import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
    constructor(private authService: AuthService,private toastr: ToastrService,  private router: Router) { }
  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
      : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isAuthenticate) {
        return true;
      } else {
        this.toastr.error('Authenticate Failed', 'Please login!');
        this.router.navigate(['/loginpage']);
        return false; 
      }
    }
  }
