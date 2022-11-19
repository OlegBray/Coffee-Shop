import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  selectedItems:any[] = [];
  ordered:boolean = false;

  constructor(
    private localStorage:LocalService,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.selectedItems = JSON.parse(this.localStorage.getData('cart')||'');
  }

  finished(){
    this.ordered = true;
    setTimeout(() => {
      this.ordered = false;
      this.localStorage.clearData();
      this.router.navigate(['/home']);
    }, 5000);
  }

}
