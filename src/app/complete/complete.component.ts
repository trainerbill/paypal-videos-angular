import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {

  public orderId: string = Math.random().toString(36).substring(7);

  constructor() { }

  ngOnInit() {

  }

}
