import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SendformService} from './sendform.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AboutfounderComponent } from './nextmaterial/aboutfounder/aboutfounder.component';
import { FooterComponent } from './nextmaterial/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutfounderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [SendformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
