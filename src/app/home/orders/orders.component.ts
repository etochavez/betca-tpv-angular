import {Component} from '@angular/core';
import {Order} from './order.model';
import {MatDialog} from '@angular/material';
import {OrderCreationDialogComponent} from './order-creation-dialog.component';
import {OrderService} from './order.service';
import {OrderReadDialogComponent} from './order-read-dialog.component';

@Component({
  templateUrl: `orders.component.html`
})

export class OrdersComponent {

  order: Order;

  title = 'Orders management';
  columns = ['description', 'providerId', 'openingDate'];
  data: Order[];

  constructor(private dialog: MatDialog, private orderService: OrderService) {
    this.order = {description: null, providerId: null, orderLines: null, openingDate: null};
    this.data = null;
  }

  search() {
    this.orderService.getAll().subscribe(
      data => this.data = [...data]
    );
  }

  resetSearch() {
    this.order = {description: null, providerId: null, orderLines: null, openingDate: null};
  }

  create() {
    this.dialog.open(OrderCreationDialogComponent, {
      width: '500px',
    });
  }

  read(order: Order) {
    this.dialog.open(OrderReadDialogComponent, {
      width: '500px',
      data: {
        dialogTitle: order.description,
        orderData: order
      }
    });
  }

  update(order: Order) {
    // TODO
  }

  delete(order: Order) {
    // TODO
  }

}
