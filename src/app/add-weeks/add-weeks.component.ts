import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'
import { week } from '../week.interface'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { VariableAst } from '@angular/compiler';

@Component({
  selector: 'app-add-weeks',
  templateUrl: './add-weeks.component.html',
  styleUrls: ['./add-weeks.component.css']
})
export class AddWeeksComponent implements OnInit {
  weekForm: FormGroup
  constructor(private service: ServiceService, private fb: FormBuilder) { 
    this.weekForm = this.fb.group({
      level: new FormControl(null, Validators.required),
      sessionNumber: new FormControl(null, Validators.required),
      weekNumber: new FormControl(null, Validators.required),
      warmUpDescription: new FormControl(null, Validators.required),
      stretchDescription: new FormControl(null, Validators.required),
      kicksDescription: new FormControl(null, Validators.required),
      strikesDescription: new FormControl(null, Validators.required),
      blocksDescription: new FormControl(null, Validators.required),
      combosDescription: new FormControl(null, Validators.required),
      formDescription: new FormControl(null, Validators.required)
    })
  }
  ngOnInit() { }
  submit() {
      let level = this.weekForm.get('level').value
      let sessionNumber = this.weekForm.get('sessionNumber').value
      let week = {
        weekNumber: this.weekForm.get('weekNumber').value,
        warmUpDescription: this.weekForm.get('warmUpDescription').value,
        stretchDescription: this.weekForm.get('stretchDescription').value,
        kicksDescription: this.weekForm.get('kicksDescription').value,
        strikesDescription: this.weekForm.get('strikesDescription').value,
        blocksDescription: this.weekForm.get('blocksDescription').value,
        combosDescription: this.weekForm.get('combosDescription').value,
        formDescription: this.weekForm.get('formDescription').value
      }
      this.service.postWeek(week, level, sessionNumber).subscribe(err => {
        if (err) {
          console.log(err)
        } else {
          console.log("GREAT SUCCESS")
        }
      })
    }
}
