import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilInterceptor } from './shared/interceptors/perfil.interceptor';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { LayoutSaintgraaoComponent } from './layout-saintgraao/layout-saintgraao.component';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
    FlexboxComponent,
    LayoutSaintgraaoComponent,
    GridComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: PerfilInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
