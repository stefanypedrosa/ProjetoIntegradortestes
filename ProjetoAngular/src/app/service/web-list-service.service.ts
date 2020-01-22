import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { usuario } from '../model/usuario';
import { produto } from '../model/produto';



@Injectable({
  providedIn: 'root'
})

export class WebListServiceService {

  public listaUser: usuario[];

  constructor(private xuxa: HttpClient) { }

  //produtos
  public obterLista(){
    return this.xuxa.get("http://cloud.professorisidro.com.br:8088/produtos")
  }
  public obterListaPorId(  id: string){
    return this.xuxa.get(`http://cloud.professorisidro.com.br:8088/produtos/${id}`)
  }

  //usuarios api isidro
  public recuperaTodos(){
    return this.xuxa.get("http://cloud.professorisidro.com.br:8088/usuario/all");
  }
  public recuperaDetalhe(id: number){
  return this.xuxa.get(`http://cloud.professorisidro.com.br:8088/usuario/${id}`);
  }
  public atualiza(usuario: usuario){
    return this.xuxa.put("http://cloud.professorisidro.com.br:8088/usuario",usuario);
  }


  //usuario backend proprio
  public inserir(usuario:usuario){
    return this.xuxa.post("http://localhost:8080/usuario/new",usuario);
  }
  public login(login: usuario){
    return this.xuxa.post("http://localhost:8080/login", login);
  }
  public inserirp(produto:produto){
    return this.xuxa.post("http://localhost:8080/produto/new",produto);
  }
}