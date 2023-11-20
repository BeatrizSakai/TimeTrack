// task.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../calendario/calendario.component';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  getTasks() {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksSubject.next([...this.tasks]);
  }
}
