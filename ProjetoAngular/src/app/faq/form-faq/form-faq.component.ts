import { Component, OnInit } from '@angular/core';
import { faq } from '../../model/faq'

@Component({
  selector: 'app-form-faq',
  templateUrl: './form-faq.component.html',
  styleUrls: ['./form-faq.component.css']
})
export class FormFaqComponent implements OnInit {

  public faq: faq = new faq;
  private filtro: any = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;
  private num: any = /^[0-9]+$/;
  private _msgErroN: string = null;
  private _msgErroS: string = null;
  private _msgErroE: string = null;
  private _msgErroT: string = null;
  private _msgErroA: string = null;
  private _msgEnviar: string = null;

  constructor() { }

  ngOnInit() {
  }

  validacao() {
    if (this.faq.nome == "" || this.faq.email == "" || this.faq.telefone == null || this.faq.mensagem == "") {
      alert('Preencha todos os campos');
    }

    if (!this.filtro.test(this.faq.nome)) {
      this.faq.nome = "";
      this._msgErroN = "Dado inválido";
    }
    else {
      this._msgErroN = null;
    }

    if (this.faq.email.indexOf("@") == -1 && this.faq.email.indexOf("@") > 1 || this.faq.email.indexOf(".") == -1) {
      this.faq.email = "";
      this._msgErroE = "Dado inválido";
    }
    else {
      this._msgErroE = null;
    }

    if (this.faq.telefone.length < 10 || !this.num.test(this.faq.telefone)) {
      this.faq.telefone = null;
      this._msgErroT = `Digite um telefone válido`;
    }
    else {
      this._msgErroT = null;
    }

    if (this.faq.assunto == "Selecione") {
      this._msgErroA = "Escolha uma opção";
    }
    else {
      this._msgErroA = null;
    }

    if (this.faq.nome != "" && this.faq.sobrenome != "" && this.faq.email != "" && this.faq.telefone != null && this.faq.assunto != "Selecione" && this.faq.mensagem != "") {
      this._msgEnviar = "Dados enviados com SUCESSO!!";
      this.faq.nome = "";
      this.faq.sobrenome = "";
      this.faq.email = "";
      this.faq.telefone = null;
      this.faq.assunto = "Selecione";
      this.faq.mensagem = "";
    }
  }
  limpaEnviar(){
    this._msgEnviar = null;
  }
}
