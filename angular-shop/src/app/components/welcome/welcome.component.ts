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
    this.router.navigate(['/products']);
  }

}
