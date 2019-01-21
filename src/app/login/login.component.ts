import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedserviceService } from  './../services/sharedservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  message:string;
  constructor(private formBuilder: FormBuilder, private router:Router, private sharedData: SharedserviceService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    else{
      this.sharedData.changeMessage("integrationgroup")
      this.router.navigate(['integrationgroup'])
    }
  }
  get f() { return this.loginForm.controls; }
}
