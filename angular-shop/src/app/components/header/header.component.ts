import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private location:Location, 
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
  }
  goBack(){
    this.location.back();
  }

  onPress(){
    this.router.navigate(['/home']);
  }

}
