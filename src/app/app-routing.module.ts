import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCadastroComponent } from './cadastro/view-cadastro/view-cadastro.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { LayoutSaintgraaoComponent } from './layout-saintgraao/layout-saintgraao.component';

const routes: Routes = [
  {path: 'cadastro', loadChildren: ()=> import('./cadastro/cadastro.module').then(m => m.CadastroModule)},
  {path: 'flexbox', component: FlexboxComponent},
  {path: 'saintgraao', component: LayoutSaintgraaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
