import {Component, OnInit} from '@angular/core';
import {PalindromeService} from '../palindrome/palindrome.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  response = '';
  constructor(private palindromeService: PalindromeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    const str = this.route.snapshot.params.str;
    if(str){
        this.response = this.palindromeService.isPalindrome(str) ? 'OK' : 'KO';
    }
  }

}