import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
