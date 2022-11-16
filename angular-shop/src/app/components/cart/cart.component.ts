import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  localItems:any[] = [];
  sumPrice:number = 0;
  amount?:number;
  countOfItems:number = 1;
  overallPrice:number = 0;

  constructor(
    private localStorage:LocalService,
    private router:Router) { }

  ngOnInit(): void {
    this.localItems = JSON.parse(this.localStorage?.getData('cart')||'');
    console.log(this.localItems);
    
    for (let i = 0; i < this.localItems.length; i++) {
      this.sumPrice += parseInt(this.localItems[i].dishPrice);
    }
  }

  onDelete(index:number){
    this.sumPrice = this.sumPrice - this.localItems[index].dishPrice;
    this.localItems.splice(index, 1);
    this.localStorage.saveData('cart', JSON.stringify(this.localItems));
    this.amount = parseInt(this.localStorage.getData('amount')||'');
    this.amount -= 1;
    this.localStorage.saveData('amount', JSON.stringify(this.amount));
  }

  onPay(){
    alert('Transaction has been succesfuly transmited');
    this.localStorage.clearData();
    this.localItems = [];
    this.sumPrice = 0;
    this.router.navigate(['/home']);
  }

  onPlus(c:number, index:number){
    c++;
    this.localItems[index].amount = c;
    let x = parseInt(this.localItems[index].dishPrice) * c; 
    this.localItems[index].overallPrice = x.toString();
    this.localStorage.saveData('cart', JSON.stringify(this.localItems));
  }

  onRemove(c:number ,index:number){
    c--;
    this.localItems[index].amount = c;
    let x = parseInt(this.localItems[index].dishPrice) * c;
    this.localItems[index].overallPrice = x.toString();
    this.sumPrice -= parseInt(this.localItems[index].dishPrice);
    this.localStorage.saveData('cart', JSON.stringify(this.localItems));
    if(c == 0){
      this.onDelete(index);
      return;
    }
  }

  overallOrRegular(item:any){
    if(item.overallPrice === ''){
      return item.dishPrice;
    }else{
      return item.overallPrice;
    }
  }

  summerize(){
    this.overallPrice = 0;
    for(let i=0;i<this.localItems.length;i++)
    {
      if(this.localItems[i].overallPrice != ''){
        this.overallPrice += parseInt(this.localItems[i].overallPrice);
      }
      else{
        this.overallPrice += parseInt(this.localItems[i].dishPrice);
      }
    }
    return this.overallPrice;
  }
}
