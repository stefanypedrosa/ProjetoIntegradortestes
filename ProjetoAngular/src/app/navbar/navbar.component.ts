import { Component, OnInit } from '@angular/core';
import { WebListServiceService } from '../service/web-list-service.service';
import { Globals } from '../model/login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ Globals ]
})
export class NavbarComponent implements OnInit {
  private id: number;
  private usuario:string;
  private login: String = "";
  constructor(private srv: WebListServiceService) { }
  log:boolean;

  ngOnInit() {
    this.srv.log.subscribe(value => {
      this.log = value;
    });
    if(localStorage.getItem("nome")){
      Globals.nome = localStorage.getItem("nome");
      this.usuario = Globals.nome;
    }
    // if(localStorage.getItem("id")){
    //   Globals.id = localStorage.getItem("id");
    //   this.id = Globals.id;
    // }
  }

  logout(){
    this.srv.log.next(false);
  }
}
