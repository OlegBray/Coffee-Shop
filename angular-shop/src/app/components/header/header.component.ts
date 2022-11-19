import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  emptyArray:any[] = [];
  hide:boolean = false;

  constructor( 
    private route:ActivatedRoute,
    private router:Router,
    private localStorage:LocalService,
    ) { }

  ngOnInit(): void {
  }

  onPress(){
    this.router.navigate(['/home']);
  }
  hidden(){
    if(window.location.pathname === '/home')
      return true;
    return false;
  }
  transferToCart(){
    if(this.localStorage.getData('cart') === undefined || 
      JSON.parse(this.localStorage.getData('cart')||'') === this.emptyArray ){
        this.hide = true;
    }
    else{
      this.router.navigate(['/cart']);
    }
  }
}
