import { Component, OnInit } from '@angular/core';
import { SortDescriptor, orderBy, State } from '@progress/kendo-data-query';
import { GridComponent,GridDataResult,PageChangeEvent,DataStateChangeEvent  } from '@progress/kendo-angular-grid';
import { tableData } from './tableData';

@Component({
  selector: 'app-integration-group',
  templateUrl: './integration-group.component.html',
  styleUrls: ['./integration-group.component.css']
})
export class IntegrationGroupComponent implements OnInit {
  multiple: any;
  bsRangeValue: Date[] = [];
  maxDate = new Date();
  bsValue = new Date();
  activeList = [];
  statusItems= [];
  selectedItems = [];
  selectedItems1 = [];
  settings = {};
  searchValue: any = '';
  public allowUnsort = true;
    public sort: SortDescriptor[] = [{
      field: 'name',
      dir: 'asc'
    }];
    public gridView: GridDataResult;
    public tableData: any[] = tableData;
    public filterData: any[] = tableData;
    public pageSize = 10;
    public skip = 0;
    public state: State = {
      skip: 0,
      take: 5,

      // Initial filter descriptor
      // filter: {
      //   logic: 'and',
      //   filters: [{ field: 'name', operator: 'contains', value: 'Chef' }]
      // }
  };
  constructor() { }

  ngOnInit() {
    this.loadtableData();
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    //this.bsRangeValue = [this.bsValue, this.maxDate];
    this.activeList = [
      { "id": 1, "itemName": "Yes" },
      { "id": 2, "itemName": "No" }
    ];

    this.statusItems = [
      { "id": 1, "itemName": "Completed" },
      { "id": 2, "itemName": "Running" },
      { "id": 3, "itemName": "Queued" }];
    this.settings = {
      singleSelection: false,
      text: "Select",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3
    };
    
    for(let i=0;i<document.getElementsByClassName("k-link").length;i++){
    //   let str = document.getElementsByClassName("k-link")[i].nodeValue.split();
    // for(let j=0;j<str.length;j++){
    //   debugger;
    //   if(str[j]== str[j].toUpperCase()){
    //     str[j]== ' '+str[j].toLowerCase();
    //     str.join('');
    //     return str;
    //   }
    // }
    //document.getElementById("k-link")[i].text = str;
  }
   
   //this.gridView= process(this.tableData, this.state);
  }
  onItemSelect(item: any) {
    this.tableData=[];
    if(this.selectedItems.length != 0 && this.selectedItems1.length == 0 && this.bsRangeValue.length<2 && this.searchValue==''){
      
    this.selectedItems.forEach(selectedItems => {
      this.filterData.forEach(filterData => {
      if(filterData.status.toLowerCase() == selectedItems.itemName.toLowerCase()){
      
        this.tableData.push(filterData);
      }
    });
    });
   
  }
  // else if(this.selectedItems.length != 0 && this.selectedItems1.length != 0 && this.bsRangeValue.length==2 && this.searchValue!=''){
  //   let tableData = [];
  //   this.filterData.forEach(filterData => {
  //     this.selectedItems.forEach(selectedItems => {
  //     this.selectedItems1.forEach(selectedItems1 => {
  //     if(filterData.active.toLowerCase() == selectedItems1.itemName.toLowerCase()){
  //       tableData.push(filterData);
  //     }
  //   });
  //   });
  // });
  // }
  else if(this.selectedItems.length != 0 || this.selectedItems1.length != 0 || this.bsRangeValue.length==2 || this.searchValue!=''){
    
  }
  else if(this.selectedItems.length == 0 && this.selectedItems1.length != 0 && this.bsRangeValue.length<2 && this.searchValue==''){
    this.selectedItems1.forEach(selectedItems => {
      this.filterData.forEach(filterData => {
      if(filterData.active.toLowerCase() == selectedItems.itemName.toLowerCase()){
      
        this.tableData.push(filterData);
      }
    });
    });
  }
  else if(this.selectedItems.length == 0 && this.selectedItems1.length == 0 && this.bsRangeValue.length<2 && this.searchValue==''){
    this.filterData.forEach(filterData => {
      this.tableData.push(filterData);
    });
  }
  this.loadtableData();
  }
  OnItemDeSelect(item: any) {
    this.onItemSelect(item);
  
  }
  onSelectAll(items: any) {
    
  }
  onDeSelectAll(items: any) {
   
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


public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    //this.gridView = process(this.tableData, this.state);
}


}
