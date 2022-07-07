import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice: UserService , private router:Router) { }

  ngOnInit(): void {
  }
  authData = {
    nome: '',
    cognome:'',
    email : '',
    password : '',
    number : '+39 '
  }

  register(){
    this.userservice.registerUser(this.authData)
    .subscribe(data => {
      console.log(data)
      this.router.navigate(['/login'])

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'registrazione effetuata con successo',
        showConfirmButton: false,
        timer: 2000
      })
  
    })
  }

}
