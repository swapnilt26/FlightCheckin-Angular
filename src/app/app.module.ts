import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcheckinComponent } from './components/showcheckin/showcheckin.component';
import { StartcheckinComponent } from './components/startcheckin/startcheckin.component';
import { ConfirmcheckinComponent } from './components/confirmcheckin/confirmcheckin.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowcheckinComponent,
    StartcheckinComponent,
    ConfirmcheckinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
