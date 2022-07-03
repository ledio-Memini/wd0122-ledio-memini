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
  visible:boolean = false

  logout(){
    this.authService.logout();
    this.visible = false
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
