export interface TaskType {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewTaskType {
  title: string;
  summary: string;
  dueDate: string;
}
