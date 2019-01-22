import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedserviceService } from  './../services/sharedservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showheaderdropdown: Boolean = false;
  hideData: Boolean = false;
  message: any;
  constructor( route: ActivatedRoute, private router:Router, private sharedData: SharedserviceService) {
    
   }

  ngOnInit() {
    this.sharedData.currentMessage.subscribe(message => {
      this.message = message;
    })
  }

  public showHeaderDropdown(){
    this.showheaderdropdown = !this.showheaderdropdown;
  }

  logout() {
    this.sharedData.changeMessage("Login")
    this.router.navigate(['addshow'])
  }

}
