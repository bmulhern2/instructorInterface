import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { ServiceService } from '../service.service'
import { Router } from '@angular/router'
import { level } from '../level.interface'
import { MatDialog } from '@angular/material/dialog'
import { AddWeeksComponent } from '../add-weeks/add-weeks.component'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminForm: FormGroup
  levels: level[]
  constructor(private dialog: MatDialog, private router: Router, private fb: FormBuilder, private service: ServiceService) { 
    this.adminForm = this.fb.group({
      sessionNumber: new FormControl(null, Validators.required),
      level: new FormControl(null, Validators.required),
      warmUp: new FormControl(null, Validators.required),
      stretch: new FormControl(null, Validators.required),
      kicks: new FormControl(null, Validators.required),
      strikes: new FormControl(null, Validators.required),
      blocks: new FormControl(null, Validators.required),
      combos: new FormControl(null, Validators.required),
      form: new FormControl(null, Validators.required),
    })
  }

  ngOnInit() { 
    this.service.getLevels().subscribe(levels => {
      this.levels = levels
      console.log(this.levels)
    })
  }
  submit() {
   let newLesson = {
     sessionNumber: this.adminForm.get('sessionNumber').value,
     level: this.adminForm.controls.level.value,
     warmUp: this.adminForm.get('warmUp').value,
     stretch: this.adminForm.get('stretch').value,
     kicks: this.adminForm.get('kicks').value,
     strikes: this.adminForm.get('strikes').value,
     blocks: this.adminForm.get('blocks').value,
     combos: this.adminForm.get('combos').value,
     form: this.adminForm.get('form').value,
   }
   this.service.postOne(newLesson).subscribe(err => {
     if (err) {
       console.log(err)
     } else {
       console.log("POST Success")
     }
   })
   this.adminForm.reset() 
   this.router.navigate(['/'])
  }
  openDialog() {
    this.dialog.open(AddWeeksComponent)
  }
}
