import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  // usuario: any = ""

  nome: string | null = localStorage.getItem("nomeUsuario")

  ngOnInit(): void {
    
  //  this.usuario = localStorage.getItem("nome")

  
  
  }

}
