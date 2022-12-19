import { Component, OnInit } from '@angular/core';
import { EventlistService } from '../eventlist.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  ngOnInit(): void {
    
  }
  public list:any;
  constructor(public event:EventlistService){
    this.list= this.event.List;
  }
}
