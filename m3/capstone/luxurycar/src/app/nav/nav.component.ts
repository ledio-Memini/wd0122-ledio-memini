import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {

  }



  logout(){
    this.authService.logout();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'sei stato sloggato',
      showConfirmButton: false,
      timer: 1500
    })

    this.router.navigate(['/login'])
  }

}
