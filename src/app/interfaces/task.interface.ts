export interface TaskInterface {
  id: number,
  comment: string,
  priority: TaskPriorityEnum,
  status: TaskStatusEnum,
}

export enum TaskPriorityEnum {
  'HIGH', 'MEDIUM', 'LOW'
}

export enum TaskStatusEnum {
  TODO = 'toDo',
  IN_PROGRESS = 'inProgress',
  DONE = 'done'
}
