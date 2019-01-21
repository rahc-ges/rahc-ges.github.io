import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integration-group',
  templateUrl: './integration-group.component.html',
  styleUrls: ['./integration-group.component.css']
})
export class IntegrationGroupComponent implements OnInit {
  bsRangeValue: Date[];
  maxDate = new Date();
  bsValue = new Date();
  constructor() { }

  ngOnInit() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

}
