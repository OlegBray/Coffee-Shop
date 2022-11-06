import { Component, OnInit } from '@angular/core';
import { Products } from '../../classes/products';
import data from '../../../assets/data';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productsData:Products[] = [];

  constructor(
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.productsData = data.map((p) => {return new Products(p)});
    console.log(this.productsData); 
  }

}
