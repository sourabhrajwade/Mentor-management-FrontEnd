import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  students;
  mentors;
  constructor(private http: HttpClient) {}

  createMentor(data): Observable<any> {
    return this.http.post(environment.apiURL + 'mentor', data);
  }

  createStudent(data): Observable<any> {
    return this.http.post(environment.apiURL + 'student', data);
  }

  assignStudent(data): Observable<any> {
    return this.http.post(environment.apiURL + 'assign', data);
  }

  updateMentors(data): Observable<any> {
    return this.http.put(environment.apiURL + 'update', data);
  }

  StudentsList(data) {
    return this.http.post(environment.apiURL = 'list', data);
  }

  getMentor() {
    return this.http.get(environment.apiURL + 'mentorList');
  }

  getStudent() {
    return this.http.get(environment.apiURL + 'studentList');
  }
 }
