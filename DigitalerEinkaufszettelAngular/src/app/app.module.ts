import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateTobuyFormComponent } from './_template/template-tobuy-form/template-tobuy-form.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { TemplateTobuyComponent } from './_template/template-tobuy/template-tobuy.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateTobuyFormComponent,
    TemplateHeaderComponent,
    TemplateTobuyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
