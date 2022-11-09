import { Component, OnInit, ViewChild } from '@angular/core';
import { Products } from '../../classes/products';
import data from '../../../assets/data';
import { ActivatedRoute, Router} from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { throws } from 'assert';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @ViewChild(MatSidenav) 
    sidenav!: MatSidenav;

  productsData:Products[] = [];
  hotBeverage: any[] = [];
  coldBeverage: any[] = [];
  appetizer: any[] = [];
  entree: any[] = [];
  dessert: any[] = [];

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private observer:BreakpointObserver) { }

  ngOnInit(): void {
    this.productsData = data.map((p) => {return new Products(p)});
    this.hotBeverage = this.productsData.filter(cat => cat.dishCategory === "HotBeverage");
    this.coldBeverage = this.productsData.filter(cat => cat.dishCategory === "ColdBeverages");
    this.appetizer = this.productsData.filter(cat => cat.dishCategory === "Appetizer");
    this.entree = this.productsData.filter(cat => cat.dishCategory === "Entree");
    this.dessert = this.productsData.filter(cat => cat.dishCategory === "Dessert");
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe(res=>{
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
