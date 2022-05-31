import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { this.router=router}

  ngOnInit(): void {
  }

  goToPost(b:boolean){
    if(b){
    this.router.navigate("['true']")
    }else{
      this.router.navigate("['false']")
    }

  }

}
