import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(public route:Router){}
  public isdone =false;
  public na='';
  Login(name:any, pass:any)
  {
    if(name.value==""||pass.value=="")
    {
      alert("Enter your details properly");
    }
    else
    {
      this.na=name.value;
      this.isdone= !this.isdone;
      this.route.navigate(['/registration']);
    }
  }
}
