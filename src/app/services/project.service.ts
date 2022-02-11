import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  getProject(){
    return this.http.get("https://localhost:44371/api/ProjectModuleController");
  }

}