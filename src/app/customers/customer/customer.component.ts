import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  @Input() customer: Customer;

  @Output() deleteCustomer = new EventEmitter<number>();

  showDetails = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  delete(id: number) {
    this.deleteCustomer.emit(id);
  }

  edit() {
    this.router.navigate(['customers', this.customer.id]);
  }

  showMore() {
    this.showDetails = !this.showDetails;
  }
}
