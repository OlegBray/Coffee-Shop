import { Component, OnInit, ViewChild } from '@angular/core';
import { Products } from '../../classes/products';
import data from '../../../assets/data';
import { ActivatedRoute, Router} from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LocalService } from '../../services/local.service';

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
  added:boolean = false;

  selectedItem?:Products;
  isSelected:Boolean = false;
  toShow!:Boolean;
  selectedItems:any[] = [];
  amountOfItems?:number = 0;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private observer:BreakpointObserver,
    private localStorage:LocalService) { }

  ngOnInit(): void {
    this.productsData = data.map((p) => {return new Products(p)});
    this.hotBeverage = this.productsData.filter(cat => cat.dishCategory === "HotBeverage");
    this.coldBeverage = this.productsData.filter(cat => cat.dishCategory === "ColdBeverages");
    this.appetizer = this.productsData.filter(cat => cat.dishCategory === "Appetizer");
    this.entree = this.productsData.filter(cat => cat.dishCategory === "Entree");
    this.dessert = this.productsData.filter(cat => cat.dishCategory === "Dessert"); 
    this.amountOfItems = parseInt(this.localStorage?.getData('amount')||'');
    
    if(this.amountOfItems == null || isNaN(this.amountOfItems))
    { this.amountOfItems = 0; }
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe(res=>{
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
        this.toShow=true;
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
        this.toShow=false;
      }
    });
  }

  onSelect(obj:Products){
    this.selectedItem = obj;
    this.isSelected = true;
  }

  onAdd(){
    this.selectedItems = this.selectedItems.concat(this.selectedItem);
    this.localStorage.saveData('cart', JSON.stringify(this.selectedItems));
    this.amountOfItems = this.selectedItems.length;
    this.localStorage.saveData('amount', JSON.stringify(this.amountOfItems));
    this.added = true;
    setTimeout(() => {
      this.added = false;
    }, 1000);
  }
}
