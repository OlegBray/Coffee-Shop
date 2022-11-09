import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  name?: String;
  attention = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onEnter() {
    if (this.name === undefined || this.containsSpecialChars(this.name) === false) {  // Add Liron's docs!
      this.attention = 'Attention: Dear customer please enter your name';
    }
    else {
      this.attention = '';
      this.router.navigate(['/products']);
    }
  }

  containsSpecialChars(str:String) {
    const specialChars = [' ', '.', '#', '$', '@', '_', '/', '|', '?', '!'];
    for(let i=0; i<str.length; i++){
      let j=0;
      while(j != specialChars.length){
        if(str[i] === specialChars[j]){
          return false;
        }
        j++;
      }
    }
    return true;
  }
}
