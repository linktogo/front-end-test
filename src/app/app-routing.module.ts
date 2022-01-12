import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from './start/start.component';
import {PalindromeComponent} from './palindrome/palindrome.component';

const routes: Routes = [
{ path: '', component: PalindromeComponent },
  { path: 'start/:str', component: StartComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }