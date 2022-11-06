import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  name?:String;

  constructor(
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
  }
  
    onEnter(){
    if(this.name === undefined){
      alert('Dear customer please enter your name');
    }
    else{
      this.router.navigate(['/products']);
    }
  }

}
