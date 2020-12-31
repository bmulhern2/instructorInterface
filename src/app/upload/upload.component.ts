import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  constructor(private http: HttpClient, private el: ElementRef) { }
  ngOnInit() { }
  upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#Video')
    let fileCount: number = inputEl.files.length
    let formData = new FormData()
    if (fileCount > 0) {
      formData.append('video', inputEl.files.item(0))
      this.http.post('/upload', formData).subscribe(err => {
        if (err) {
          console.log(err)
        } else {
          console.log("Success")
        }
      })
    }
  }
}
