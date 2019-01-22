import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show-add',
  templateUrl: './show-add.component.html',
  styleUrls: ['./show-add.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class ShowAddComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  getEditData: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      displayName: ['', Validators.required],
      serverName: ['', Validators.required]
    });
    this.getEditData = this.route.snapshot.params["id"];
    console.log(this.getEditData);
  }
  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }else{
      this.router.navigate(['integrationgroup'])
    }
  }
  cancel() {
    this.router.navigate(['integrationgroup'])
  }
  get f() { return this.addForm.controls; }
}
