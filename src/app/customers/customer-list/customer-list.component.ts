import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { Observable ,  Subject ,  BehaviorSubject ,  merge ,  combineLatest } from 'rxjs';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, startWith, withLatestFrom, map } from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<Customer[]>;
  searchTerm = new FormControl();

  private search$: Observable<string>;
  private reload$ = new Subject();

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.search$ = this.searchTerm.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      startWith('')
    );

    this.customers$ = merge(this.search$, this.reload$)
      .pipe(
        withLatestFrom(this.search$),
        map(value => value[1]),
        switchMap(value => {
          return this.customerService.getAll(value);
        })
    );
  }

  addNewCustomer() {
    this.router.navigateByUrl('/customers/new');
  }

  deleteCustomer(id: number) {
    this.customerService.delete(id).subscribe(_ => this.reload$.next());
  }
}
