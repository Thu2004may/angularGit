export class Task {
  id!: string;
  title!: string;
  description!: string;
  status!: boolean;

  constructor(data?: Partial<Task>) {
    Object.assign(this, data);
  }
}
