import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskModule } from '../task/task.module';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTask(){
    return this.http.get("https://localhost:44371/api/TaskModuleController");
  }

}