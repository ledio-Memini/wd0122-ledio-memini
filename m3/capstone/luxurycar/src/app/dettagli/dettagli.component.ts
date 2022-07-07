import { Component, OnInit } from '@angular/core';
import { BentleyComponent } from '../bentley/bentley.component';


@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent implements OnInit   {

  constructor(private bentley:BentleyComponent) { }

  ngOnInit(): void {
  }

}
