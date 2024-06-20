import {Injectable} from '@angular/core';
import {Task, TaskPriority, TaskStatus} from "../../interfaces/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskManager {
  private allTasks: Array<Task> = [];

  constructor() {
  }

  private static generateUniqueId(): string {
    const timestamp = new Date().getTime();  // Current time as a timestamp
    const randomPart = Math.floor((Math.random() * 1000000) + 1);  // Random number
    return `${timestamp}-${randomPart}`;
  }

  private static getTaskItemIndex(tasks: Task[], taskId: string): number | undefined {
    const taskIndex = tasks.findIndex((task: Task) => task.id == taskId);
    if (taskIndex >= 0) {
      return taskIndex;
    } else {
      const errorMessage = 'Task not found!';
      alert(errorMessage);
      return undefined;
    }
  }

  public getTasks(): Task[] {
    return this.allTasks;
  }

  public addTask(title: string, priority: TaskPriority, status: TaskStatus, dueDate?: Date, description?: string): void {
    let newItemId = TaskManager.generateUniqueId();
    let newItem: Task = {
      id: newItemId,
      title,
      priority,
      status,
      dueDate,
      description
    }
    this.allTasks.push(newItem);
    alert('Task item added successfully!');
  }

  public editTask(taskId: string, title: string, priority: TaskPriority, status: TaskStatus, dueDate?: Date, description?: string): void {

    const taskIndex = TaskManager.getTaskItemIndex(this.allTasks, taskId);

    if (taskIndex !== undefined) {
      const editedTaskItem = this.allTasks[taskIndex];

      editedTaskItem.title = title;
      editedTaskItem.priority = priority;
      editedTaskItem.status = status;
      if (editedTaskItem.dueDate) editedTaskItem.dueDate = dueDate;
      if (editedTaskItem.description) editedTaskItem.description = description;
      this.allTasks[taskIndex] = editedTaskItem;

      alert('Task item updated successfully!');
    }

  }

  public updateTaskStatus(taskId: string, status: TaskStatus): void {
    const taskIndex = TaskManager.getTaskItemIndex(this.allTasks, taskId);

    if (taskIndex !== undefined) {
      const editedTaskItem = this.allTasks[taskIndex];

      editedTaskItem.status = status;
      this.allTasks[taskIndex] = editedTaskItem;

      alert('Task item updated successfully!');
    }
  }

  public deleteTask(taskId: string): void {
    const taskIndex = TaskManager.getTaskItemIndex(this.allTasks, taskId);

    if (taskIndex !== undefined) {
      this.allTasks.splice(taskIndex, 1);

      alert('Task item deleted successfully!');
    }
  }
}

