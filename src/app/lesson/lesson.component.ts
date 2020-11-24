import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'
import { lesson } from '../lesson.interface'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  lesson: lesson
  constructor(private route: ActivatedRoute, private serviceService: ServiceService) { }

  ngOnInit() { 
    let id = this.route.snapshot.paramMap.get("id")
    console.log(id)
    this.serviceService.getOne(id).subscribe(res => {
    this.lesson = res;
    console.log(this.lesson) 
    })
  }

}
