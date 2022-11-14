import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from 'src/app/services/local.service';

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
    private router: Router,
    private localStorage:LocalService) { }

  ngOnInit(): void {
  }

  onEnter() {
    if (this.name === undefined || this.containsSpecialChars(this.name) === false) {  // Add Liron's docs!
      this.attention = 'Attention: Dear customer please enter your name';
    }
    else {
      this.attention = '';
      this.localStorage.saveData('name', JSON.stringify(this.name));
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
