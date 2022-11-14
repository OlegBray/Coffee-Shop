import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  localItems:any[] = [];
  sumPrice:number = 0;

  constructor(private localStorage:LocalService) { }

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
  }

  onPay(){
    alert('Transaction has been succesfuly transmited');
    this.localStorage.clearData();
    this.localItems = [];
    this.sumPrice = 0;
  }

}
