import { Component, OnInit } from '@angular/core';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { tableData } from './tableData';

@Component({
  selector: 'app-integration-group',
  templateUrl: './integration-group.component.html',
  styleUrls: ['./integration-group.component.css']
})
export class IntegrationGroupComponent implements OnInit {
  bsRangeValue: Date[];
  maxDate = new Date();
  bsValue = new Date();
  activeList = [];
  statusItems= [];
  selectedItems = [];
  selectedItems1 = [];
  settings = {};
  public allowUnsort = true;
    public sort: SortDescriptor[] = [{
      field: 'ProductName',
      dir: 'asc'
    }];
    public gridView: GridDataResult;
    public tableData: any[] = tableData;
  constructor() { }

  ngOnInit() {
    this.loadtableData();
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.activeList = [
      { "id": 1, "itemName": "Yes" },
      { "id": 2, "itemName": "No" }
    ];

    this.statusItems = [
      { "id": 1, "itemName": "Completed" },
      { "id": 2, "itemName": "Running" },
      { "id": 2, "itemName": "Queued" }];
    this.settings = {
      singleSelection: false,
      text: "Select",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  private loadtableData(): void {
    this.gridView = {
        data: orderBy(this.tableData, this.sort),
        total: this.tableData.length
    };
}
public sortChange(sort: SortDescriptor[]): void {
  this.sort = sort;
  this.loadtableData();
}

}
