import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'
import { ActivatedRoute } from '@angular/router'
import { week } from '../week.interface'
@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  weeks: week[]
  constructor(private route: ActivatedRoute, private serviceService: ServiceService) { }

  ngOnInit() { 
    let id = this.route.snapshot.paramMap.get("id")
    console.log(id)
    this.serviceService.getOne(id).subscribe(res => {
    this.weeks = res['weeks'];
    console.log(this.weeks) 
    })
  }
}
