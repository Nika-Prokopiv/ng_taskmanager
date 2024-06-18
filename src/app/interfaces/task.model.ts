export interface Task {
  id: string;               // Unique identifier for the task
  title: string;            // Short, descriptive title of the task
  priority: TaskPriority;   // Priority level of the task
  status: TaskStatus;        // Current status of the task
  description?: string;      // Optional detailed description of the task
  dueDate?: Date;           // Optional due date for the task
}

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'inProgress',
  DONE = 'done'
}

export function enumToKeyValueArray(enumObj: any): { key: string, value: string }[] {
  const keys = Object.keys(enumObj);
  return keys.map(key => ({
    key: key.toLowerCase().split('_').join(' '),
    value: enumObj[key]
  }));
}
