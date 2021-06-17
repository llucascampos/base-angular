import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ViewCadastroComponent } from './view-cadastro/view-cadastro.component';
import { ReactiveFormsModule } from '@angular/forms'

export const routes: Routes = [
  {path: '', component: ViewCadastroComponent}
]


@NgModule({
  declarations: [
    FormularioComponent,
    ViewCadastroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)

  ]
})
export class CadastroModule { }
