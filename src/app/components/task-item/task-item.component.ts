import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import {
  faTimesCircle,
  faCheckCircle,
  faBridgeCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() color!: string;
  faTimesCircle = faTimesCircle;
  faCheckCircle = faCheckCircle;
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onCompleteTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onComplete(task: Task) {
    this.onCompleteTask.emit(task);
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
}
