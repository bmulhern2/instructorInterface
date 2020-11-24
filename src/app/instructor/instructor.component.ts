/*

To Do:
CSS

Reference
Stack: https://stackoverflow.com/questions/38062702/how-to-pass-a-parameter-to-routerlink-that-is-somewhere-inside-the-url
Medium: https://medium.com/better-programming/angular-6-url-parameters-860db789db85

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
  constructor(private router: Router, private cookieService: CookieService, private service: ServiceService) { }
  ngOnInit() {
    this.service.getAll().subscribe(res => {
      this.lessons = res
      console.log(this.lessons)
    })
  }
}
