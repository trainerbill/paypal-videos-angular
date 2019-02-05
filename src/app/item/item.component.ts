import { Component, OnInit, Input } from '@angular/core';
import { Items } from './item.constants';
import { Item } from './item.class';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() number: number;
  public item: Item;

  constructor() { }

  ngOnInit() {
    this.item = Items[this.number];
  }

}
