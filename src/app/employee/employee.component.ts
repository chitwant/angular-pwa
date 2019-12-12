import { Component, OnInit } from '@angular/core';

import { EmpService } from '../emp.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any = [];
  posts: any= [];
  constructor( private router: Router, private empService: EmpService) { }
  getAllEmp() {
    this.empService.getPosts().subscribe((employee: any) => {
        this.employees = this.employees.success;
        console.log(this.employees);
    });
  }


  getAllPosts() {
    this.empService.getPosts().subscribe((posts) => {
        this.posts = posts;
        console.log(this.posts);
    });
}

  ngOnInit() {
    this.getAllPosts();
  }

}
