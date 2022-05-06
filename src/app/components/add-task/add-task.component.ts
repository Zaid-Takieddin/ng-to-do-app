import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  title!: string;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onKeydownEnter() {
    let d = new Date();

    if (!this.title) {
      alert('Empty Title!');
      return;
    }

    const newTask = {
      title: this.title,
      createdAt: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}  ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      completed: false,
    };

    this.onAddTask.emit(newTask);

    this.title = '';
  }
}
