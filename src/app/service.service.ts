import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lesson } from '../app/lesson.interface';
import { Observable } from 'rxjs'
import { CookieService }  from 'ngx-cookie-service'
import { level } from './level.interface'
import { week } from './week.interface'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }
  getAll(): Observable<lesson[]> {
    return this.http.get<lesson[]>('/api')
  }
  getByLevel(level): Observable<lesson[]> {
    return this.http.get<lesson[]>('/api/lesson/' + level)
  }
  getLevels(): Observable<level[]> {
    return this.http.get<level[]>('/api/levels')
  }
  getOne(id): Observable<lesson> {
    return this.http.get<lesson>('/api/' + id)
  }
  postOne(data): Observable<lesson> {
    return this.http.post<lesson>('/api/create', data)
  }
  putOne(data, id): Observable<lesson> {
    return this.http.put<lesson>('/api/edit/' + id, data)
  }
  deleteOne(id): Observable<lesson> {
    return this.http.delete<lesson>('/api/delete/' + id)
  }
  postWeek(data, level, sessionNumber): Observable<week> {
    return this.http.post<week>('/api/post/week/' + level + '/' + sessionNumber, data)
  }
  getWeeks(): Observable<week[]> {
    return this.http.get<week[]>('/api/get/weeks')
  }
}
