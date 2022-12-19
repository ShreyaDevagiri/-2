import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventlistService {

  constructor() { }
  List =[
    {
      name:"Shreya",
      dept:"CS",
      div:"A",
      eve:"DSA",
      usn:"01FE20BCS019"
    }
  ];
  courses=[
    {
      Name:"Shreya Devagiri",
      Credits: "90",
      Courses: ["C","AS","GTLA","SVC","MVC"]
    },
    {
      Name:"Abhishek Patil",
      Credits: "75",
      Courses: ["C","AS","GTLA","SVC"]
    },
    {
      Name:"Rohit Devaranavadagi",
      Credits: "100",
      Courses: ["C","AS","GTLA","SVC","MVC","AIML"]
    },
    {
      Name:"Sneha Pamali",
      Credits: "90",
      Courses: ["C","AS","GTLA","SVC","MVC"]
    }
  ];
  csCourses=[
    {
      Name:"DSA",
      Credits: "4",
    },
    {
      Name:"OS",
      Credits: "5",
    },
    {
      Name:"OOPS",
      Credits: "4",
    },
    {
      Name:"WT",
      Credits: "3",
    }
  ]
  ECCourses=[
    {
      Name:"CIRCUITS",
      Credits: "4",
    },
    {
      Name:"DSA",
      Credits: "5",
    },
    {
      Name:"ASSEMBLER",
      Credits: "4",
    }
  ]
  MECourses=[
    {
      Name:"AUTOMOBILE",
      Credits: "4",
    },
    {
      Name:"SOFTWARE",
      Credits: "5",
    },
    {
      Name:"MACHINE",
      Credits: "4",
    }
  ];
  add_to_list(na: any, dt: any, e: any, d: any, srn: any)
   {
    this.List.push({ name: na, dept: dt, eve: e, div: d, usn: srn });
  }
}
