import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { tableData } from '../../integration-group/tableData';
@Component({
  selector: 'app-show-add',
  templateUrl: './show-add.component.html',
  styleUrls: ['./show-add.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class ShowAddComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean = false;
  status = false;
  isChecked: boolean = false;
  getEditId: any;
  getEditData: any;
  public tableData: any[] = tableData;
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      displayName: [''],
      serverName: ['', Validators.required]
    });
    this.getEditId = this.route.snapshot.params["id"];
    this.getEditData = this.tableData.filter(val => {
      if (val.id == this.getEditId) {
        return val;
      }
    })
    if (this.getEditId !== 'add') {
      this.addForm.patchValue(this.getEditData[0]);
      this.isChecked = this.checked();
    }

  }

  public addNewData() {
    this.onSubmit('addnew');
  }

  public checked(){
    return this.getEditData[0].active === "yes"? true:false;
  }

  public toggleEditable(event) {
    // if (event.target.checked) {
    //   this.isChecked = "yes";
    // } else {
    //   this.isChecked = "no";
    // }
    // console.log(this.isChecked);
  }
  onSubmit(data) {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    } else {
      if (data === 'save') {
        this.router.navigate(['integrationgroup'])
      } else {
        this.addForm.reset();
      }
    }
  }
  public cancel() {
    this.router.navigate(['integrationgroup'])
  }
  get f() { return this.addForm.controls; }
}
