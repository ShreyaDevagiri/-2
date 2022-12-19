import { Component, OnInit } from '@angular/core';
import { EventlistService } from '../eventlist.service';
@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.css']
})
export class PreviousComponent implements OnInit {
  ngOnInit(): void {
    
  }
  public courses:any;
  constructor(public event: EventlistService){
    this.courses= this.event.courses;
  }
}
