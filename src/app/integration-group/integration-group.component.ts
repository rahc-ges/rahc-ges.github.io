import { Component, OnInit } from '@angular/core';
import { SortDescriptor, orderBy, State } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, PageChangeEvent, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { tableData } from './tableData';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
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
  statusItems = [];
  selectedItems = [];
  selectedItems1 = [];
  settings = {};
  getSaveData: any;
  staticObject: any;
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
  public showSelectedToDelete: number[] = [];
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() {
    let saticObject = {
      "lastModified": '4/6/2018 12:17 AM',
      "scheduled": "1/15/2019 9:00 AM ",
      "status": "Running",
      "lastRun": "1/15/2019 8:00 AM",
      "description": "Integration",
      "integrationRun": [{
        "integrationName": "Integration1",
        "sourceConnection": "A Connection",
        "targetConnection": "Another connection",
        "active": 'yes',
        "startRun": "1/15/2019 9:00 AM ",
        "status": "Completed",
        "lastRun": "1/15/2019 8:00 AM",
        "previousStatus": "Completed",
        "payload": 10,
        "failure": 0
      }]
    }
    // let incrementIdvalue = this.tableData.length+1;

    this.loadtableData();
    //this.getSaveData = this.route.snapshot.params["obj"];
    this.route.queryParams
      .subscribe(params => {
        this.getSaveData = params;
        this.staticObject = { ...saticObject, ...this.getSaveData };
        if (this.getSaveData.type === 'save') {
          this.tableData.push(this.staticObject);
        }
        if (this.getSaveData.type === 'edit') {
          let typeCheck = this.tableData.findIndex(x => x.id == this.getSaveData.id);
          this.tableData.splice(typeCheck, 1);
          this.tableData.splice(typeCheck, 0, this.staticObject);
          console.log(this.tableData, 'tableData');
          this.loadtableData();
        }
      });
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

    for (let i = 0; i < document.getElementsByClassName("k-link").length; i++) {
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
    this.tableData = [];
    if (this.selectedItems.length != 0 && this.selectedItems1.length == 0 && this.bsRangeValue.length < 2 && this.searchValue == '') {

      this.selectedItems.forEach(selectedItems => {
        this.filterData.forEach(filterData => {
          if (filterData.status.toLowerCase() == selectedItems.itemName.toLowerCase()) {

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
    else if (this.selectedItems.length != 0 || this.selectedItems1.length != 0 || this.bsRangeValue.length == 2 || this.searchValue != '') {

    }
    else if (this.selectedItems.length == 0 && this.selectedItems1.length != 0 && this.bsRangeValue.length < 2 && this.searchValue == '') {
      this.selectedItems1.forEach(selectedItems => {
        this.filterData.forEach(filterData => {
          if (filterData.active.toLowerCase() == selectedItems.itemName.toLowerCase()) {

            this.tableData.push(filterData);
          }
        });
      });
    }
    else if (this.selectedItems.length == 0 && this.selectedItems1.length == 0 && this.bsRangeValue.length < 2 && this.searchValue == '') {
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

  public deleteGroups() {
    console.log(this.showSelectedToDelete);
  }
  public selectedKeysChange(rows: number[]) {
    console.log(rows);
  }
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    //this.gridView = process(this.tableData, this.state);
  }

  public editHandler({ dataItem }) {
    console.log(dataItem);
  }


}
