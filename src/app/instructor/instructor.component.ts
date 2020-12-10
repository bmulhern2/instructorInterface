/*

Implement:
Match Lesson View To Prototype
Match Individual Lesson View With Protot
Admin Actions

Reference
Stack: https://stackoverflow.com/questions/38062702/how-to-pass-a-parameter-to-routerlink-that-is-somewhere-inside-the-url
Medium: https://medium.com/better-programming/angular-6-url-parameters-860db789db85
StackOverFlow: https://stackoverflow.com/questions/59294597/including-an-href-in-mat-list-item-not-working

*/
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'
import { lesson } from '../lesson.interface'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service' 
@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  lessons: lesson[]
  basic: lesson[]
  bbt1: lesson[]
  bbt2: lesson[]
  bbt3: lesson[]
  constructor(private router: Router, private service: ServiceService) { }
  ngOnInit() {
  // Get Basic
  this.service.getByLevel("Basic").subscribe(lessons => {
    this.basic = lessons
    console.log(this.basic)
  })
  // Get BBT 1
  this.service.getByLevel("BBT 1").subscribe(lessons => {
    this.bbt1 = lessons
    console.log(this.bbt1)
    })
  // Get BBT 2
  this.service.getByLevel("BBT 2").subscribe(lessons => {
    this.bbt2 = lessons
    console.log(this.bbt2)
  })
  // Get BBT 3
  this.service.getByLevel("BBT 3").subscribe(lessons => {
    this.bbt3 = lessons
    console.log(this.bbt3)
  })
  }
}