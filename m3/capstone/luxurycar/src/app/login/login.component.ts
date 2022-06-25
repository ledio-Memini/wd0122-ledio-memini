import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  authData = {
    email : '',
    password : ''
  }

  login(){
    this.auth.login(this.authData).subscribe((res:any) => {
      console.log(res);
      this.auth.logUser(res.accessToken)
      this.router.navigate(['/'])

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'login effettuato',
        showConfirmButton: false,
        timer: 2000
      })
  
    })
  }

}
