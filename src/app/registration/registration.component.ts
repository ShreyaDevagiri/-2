import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventlistService } from '../eventlist.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  ngOnInit(): void {}
  public na="";
  public c= "";
  public isdone = false;
  constructor(public stu:EventlistService){
  }
  EveRegister(name:any,usn:any,dept:any,div:any,eve:any)
  {
    if(name.value==""||usn.value==""||dept.value==""||div.value==""||eve.any=="")
    {
      alert("Please fill in the details properly");
    }
    else
    {
      this.na= name.value;
      this.c =eve.value;
      this.isdone= !this.isdone;
    }
    this.stu.add_to_list(name.value,dept.value,eve.value,div.value,usn.value);
    dept.value=""
    name.value=""
    eve.value=""
    div.value=""
    usn.value=""
  } 
}
