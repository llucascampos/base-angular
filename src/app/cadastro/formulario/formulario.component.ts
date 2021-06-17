import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/shared/models/cliente';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formCliente: FormGroup;

  ngOnInit(): void {
    this.createForm(new Cliente())
  }

  createForm(cliente: Cliente) {
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome, Validators.required),
      sobrenome: new FormControl(cliente.sobrenome),
      cpf: new FormControl(cliente.cpf),
      rg: new FormControl(cliente.rg),
      telefone: new FormControl(cliente.telefone),
      logradouro: new FormControl(cliente.logratorio),
      numero: new FormControl(cliente.numero),
      bairro: new FormControl(cliente.bairro),
      cidade: new FormControl(cliente.cidade),
      endereco: new FormControl(cliente.endereco),
      cep: new FormControl(cliente.cep),
      estado: new FormControl(cliente.estado)
    })
  }

  // createFormBuilder(cliente: Cliente) {
  //   this.formCliente = this.formBuilder.group({
  //     nome: [cliente.nome, validators.required],
  //     sobrenome: [cliente.sobrenome],
  //     cpf: [cliente.cpf],
  //     rg: [cliente.rg],
  //     telefone: [cliente.telefone],
  //     logradouro: [cliente.logratorio],
  //     numero: [cliente.numero],
  //     bairro: [cliente.bairro],
  //     cidade: [cliente.cidade],
  //     endereco: [cliente.endereco],
  //     cep: [cliente.cep],
  //     estado: [cliente.estado],
  //   })
  // }

  onSubmit(){

 
    console.log(this.formCliente.value)
    console.log(this.formCliente.controls)

    if(this.formCliente.valid){
      console.log("valido")
    }
    
    //limpando formulario 
    this.formCliente.reset(new Cliente())

    //ou

    this.createForm(new Cliente())
  }


}
