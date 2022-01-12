import { Component, OnInit } from '@angular/core';
import {PalindromeService} from './palindrome.service';
import {Palindrome} from '../models/palindrome';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'label'];
  palindromeList: Palindrome[] = [];

  constructor(private palindromeService: PalindromeService) { }

  ngOnInit(): void {
    this.palindromeService.getPalindromeList().toPromise().then( palindromeListResponse => {
      this.palindromeList = palindromeListResponse;
    }, (error: HttpErrorResponse) => {
      throw error;
    });
  }

  isPalindrome(str: string): boolean{
    return this.palindromeService.isPalindrome(str);
  }

}