import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router'
import { ServiceService } from '../service.service' 
import { week } from '../week.interface';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  weeks: week[]
  indivudual: week
  level: string
  sessionNumber: string
  constructor(private service: ServiceService, private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit() { 
    let weekId = this.route.snapshot.paramMap.get("weekId")
    this.level = this.route.snapshot.paramMap.get('level')
    this.sessionNumber = this.route.snapshot.paramMap.get('sessionNumber')
    this.service.getIndividualWeek(this.level, this.sessionNumber, weekId).subscribe(res => {
      this.weeks = res['weeks']
      for (let i=0; i <this.weeks.length; i++) {
        if (this.weeks[i]['_id'] === weekId) {
               this.indivudual = this.weeks[i];
               console.log(this.indivudual)
            }
          }
    })
  }
}
