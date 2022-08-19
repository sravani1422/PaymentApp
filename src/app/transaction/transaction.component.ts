import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { TransactionResponse } from '../models/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

    transactions: any;
      constructor(private service: ApiService) {
      }
      
  
      ngOnInit(): void {
        this.service.getTransactions().subscribe((data:any) => {
          console.log("Successful");
          this.transactions = data;
        });
      }

        

}

