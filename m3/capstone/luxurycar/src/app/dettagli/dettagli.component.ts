import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Icar } from '../icar';
import { UserService } from '../user.service';


@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent implements OnInit {

  constructor(private userService: UserService,private router: ActivatedRoute) { }
  car!:Icar
  ngOnInit(): void {
    this.router.params.subscribe((params:any) => {
      this.getId(params.id);
    })
    this.time()
  }
  
  getId(id:number):void{

    this.userService.getmodello(id).subscribe((res) =>{
      this.car = res

      console.log(res)
    } )

  }
  visible:boolean = false
  time(){
    setTimeout(()=>{                           
      this.visible = true;
  }, 2000);
  }

  compra(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Acquisto eseguito con successo',
      showConfirmButton: true,
    })
  }

}
