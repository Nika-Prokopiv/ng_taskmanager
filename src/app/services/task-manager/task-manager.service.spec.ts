import {TestBed} from '@angular/core/testing';

import {TaskManager} from './task-manager.service';
import {Task, TaskPriority, TaskStatus} from "../../interfaces/task.model";

describe('TaskManagerService', () => {
  let service: TaskManager;
  const newTask: Task = {
    id: '',
    title: 'test task 1',
    priority: TaskPriority.MEDIUM,
    status: TaskStatus.IN_PROGRESS,
    dueDate: new Date(),
    description: 'some additional text'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskManager);
  });

  it('Spec 1: should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Spec 2: getTasks should return tasks array', () => {
    expect(service.getTasks()).toBeDefined();
    expect(service.getTasks().length).toEqual(0);
  })

  it('Spec 3: should add new task item to tasks array', () => {
    expect(service.getTasks().length).toEqual(0);

    service.addTask(newTask.title, newTask.priority, newTask.status, newTask.dueDate, newTask.description);
    expect(service.getTasks().length).toEqual(1);
    expect(service.getTasks()[0].title).toBe(newTask.title);
    expect(service.getTasks()[0].priority).toBe(newTask.priority);
    expect(service.getTasks()[0].status).toBe(newTask.status);
    expect(service.getTasks()[0].dueDate).toBeDefined();
    expect(service.getTasks()[0].description).toBeDefined();
  })

  it('Spec 4: should edit task properties', () => {
    service.addTask(newTask.title, newTask.priority, newTask.status, newTask.dueDate, newTask.description);

    const editedTask = service.getTasks()[0];
    const newTaskTitle = 'Changed title';
    const newTaskStatus = TaskStatus.IN_PROGRESS;
    service.editTask(editedTask.id, newTaskTitle, editedTask.priority, newTaskStatus, editedTask.dueDate, editedTask.description);
    expect(service.getTasks()[0]).toEqual(editedTask);
  });

  it('Spec 5: should update task status', () => {
    service.addTask(newTask.title, newTask.priority, newTask.status, newTask.dueDate, newTask.description);

    const editedTask = service.getTasks()[0];
    service.updateTaskStatus(editedTask.id, TaskStatus.DONE);
    expect(service.getTasks()[0].status).toBe(TaskStatus.DONE);
  });

  it('Spec 6: should delete task', () => {
    service.addTask(newTask.title, newTask.priority, newTask.status, newTask.dueDate, newTask.description);

    const deletedTask = service.getTasks()[0];
    service.deleteTask(deletedTask.id);

    expect(service.getTasks().length).toEqual(0);
  });

  it('Spec 7: should not crash if deleting wrong id', () => {
    service.addTask(newTask.title, newTask.priority, newTask.status, newTask.dueDate, newTask.description);

    service.deleteTask('invalid-id');
    expect(service.getTasks().length).toEqual(1);
  });

});
