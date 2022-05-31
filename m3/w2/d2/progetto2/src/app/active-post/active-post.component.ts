import { Component, OnInit } from '@angular/core';
import {
    Post
} from '../post';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.css']
})

export class ActivePostComponent implements OnInit {

  posts!: Post[] 

  
  constructor() {
    fetch("../../assets/db.json")
    .then(res => res.json())
    .then(res =>{
      this.posts = res.filter((p:Post) => p.active)
    })
   }
  
  ngOnInit(): void {
    
  }
  
}



