import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
export interface ToDoItem {
  id: number;
  task: string;
  complete: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  toDoList: ToDoItem[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      const newToDoItem: ToDoItem = {
        id: Date.now(),
        task: this.newTask,
        complete: false,
      };
      this.toDoList.push(newToDoItem);
      this.newTask = '';
    }
    // console.log(this.toDoList)
  }

  toggleComplete(index: number): void {
    this.toDoList[index].complete = !this.toDoList[index].complete;
  }

  deleteTask(id:number){
    this.toDoList = this.toDoList.filter(item => item.id !== id)
    console.log(this.toDoList)

  }
}
