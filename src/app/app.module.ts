import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PalindromeComponent} from './palindrome/palindrome.component';
import {MatTableModule} from '@angular/material/table';
import {PalindromeService} from './palindrome/palindrome.service';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    PalindromeComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [PalindromeService],
  bootstrap: [AppComponent]
})
export class AppModule { }