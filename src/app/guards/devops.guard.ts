import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DevopsGuard implements CanActivate {
  constructor(private router: Router, private toastr: ToastrService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const loggedUser = localStorage.getItem("user");

    if (loggedUser) {
      const user = JSON.parse(loggedUser);

      if (user.role !== 'Devops') {
        this.toastr.error('You do not have permission to access this page.', 'Access Denied');
        this.router.navigateByUrl("/");
        return false;
      }
    }

    return true;
  }
}
