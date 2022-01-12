import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Palindrome} from '../models/palindrome';

@Injectable()
export class PalindromeService {
  constructor(private http: HttpClient) { }

  palindromeUrl = 'https://www.linktogo.fr/assets/json/fluxpalindrome.json';
  getPalindromeList() {
    return this.http.get<Palindrome[]>(this.palindromeUrl);
  }


  isPalindrome(str: string): boolean{
    return str.toLowerCase().trim() === str.toLowerCase().trim().split('').reverse().join('');
  }
}
