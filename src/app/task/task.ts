export interface Task {
    id: number;
    userId: number;
    typeId: number;
    taskType: any;
    title: string;
    detail: string;
    deadline: string;
}