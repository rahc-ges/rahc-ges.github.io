import { Component, OnInit, TemplateRef  } from '@angular/core';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { GridDataResult,PageChangeEvent  } from '@progress/kendo-angular-grid';
import { tableData } from './tableData';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-integration-group',
  templateUrl: './integration-group.component.html',
  styleUrls: ['./integration-group.component.css']
})
export class IntegrationGroupComponent implements OnInit {
  multiple: any;
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
      field: 'name',
      dir: 'asc'
    }];
    public gridView: GridDataResult;
    public tableData: any[] = tableData;
    public pageSize = 10;
    public skip = 0;
    modalRef: BsModalRef;
  constructor(private modalService: BsModalService,private router:Router) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

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
private loadItems(): void {
  this.gridView = {
      data: this.tableData.slice(this.skip, this.skip + this.pageSize),
      total: this.tableData.length
  };
}
public pageChange(event: PageChangeEvent): void {
  this.skip = event.skip;
  this.loadItems();
}

addData(){
  console.log('hiii');
  this.router.navigate(['addshow'])
}


}
