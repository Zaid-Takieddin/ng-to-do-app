import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (tasks: Task[]) =>
        (this.tasks = tasks.sort((a, b) => {
          return Number(a.completed) - Number(b.completed);
        }))
    );
  }

  addTask(task: Task) {
    if (this.tasks.length >= 5) {
      alert('MAX is 5 Tasks');
      return;
    }
    this.taskService.addTask(task).subscribe((task: Task) => {
      this.tasks.push(task),
        this.tasks.sort((a, b) => {
          return Number(a.completed) - Number(b.completed);
        });
    });
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  completeTask(task: Task) {
    task.completed = true;
    this.taskService.completeTask(task).subscribe(() =>
      this.tasks.sort((a, b) => {
        return Number(a.completed) - Number(b.completed);
      })
    );
  }
}
