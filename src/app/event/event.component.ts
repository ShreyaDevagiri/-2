import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventlistService } from '../eventlist.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  ngOnInit(): void {
    
  }
  public eve:any;
  public eve1:any;
  public eve2:any;
  constructor(public event:EventlistService, public route:Router){
    this.eve=this.event.csCourses;
    this.eve1= this.event.ECCourses;
    this.eve2= this.event.MECourses;
  }
  public isadded= false;
  register()
  {
    this.route.navigate(['registration']);
  }
  public dropDownValue="";
  SetDropDownValue(drpValue:any)
  {
    this.dropDownValue= drpValue.target.value;
  }
}
