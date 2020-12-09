import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { ServiceService } from '../service.service'
import { Router } from '@angular/router'
import { level } from '../level.interface'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminForm: FormGroup
  levels: level[]
  constructor(private router: Router, private fb: FormBuilder, private service: ServiceService) { 
    this.adminForm = this.fb.group({
      sessionNumber: new FormControl(null, Validators.required),
      level: new FormControl(null, Validators.required),
      warmUp: new FormControl(null, Validators.required),
      warmUpDescription: new FormControl(null, Validators.required),
      stretch: new FormControl(null, Validators.required),
      stretchDescription: new FormControl(null, Validators.required),
      kicks: new FormControl(null, Validators.required),
      kicksDescription: new FormControl(null, Validators.required),
      strikes: new FormControl(null, Validators.required),
      strikesDescription: new FormControl(null, Validators.required),
      blocks: new FormControl(null, Validators.required),
      blocksDescription: new FormControl(null, Validators.required),
      combos: new FormControl(null, Validators.required),
      combosDescription: new FormControl(null, Validators.required),
      form: new FormControl(null, Validators.required),
      formDescription: new FormControl(null, Validators.required)
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
     warmUpDescription: this.adminForm.get('warmUpDescription').value,
     stretch: this.adminForm.get('stretch').value,
     stretchDescription: this.adminForm.get('stretchDescription').value,
     kicks: this.adminForm.get('kicks').value,
     kicksDescription: this.adminForm.get('kicksDescription').value,
     strikes: this.adminForm.get('strikes').value,
     strikesDescription: this.adminForm.get('strikesDescription').value,
     blocks: this.adminForm.get('blocks').value,
     blocksDescription: this.adminForm.get('blocksDescription').value,
     combos: this.adminForm.get('combos').value,
     combosDescription: this.adminForm.get('combosDescription').value,
     form: this.adminForm.get('form').value,
     formDescription: this.adminForm.get('formDescription').value
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

}
