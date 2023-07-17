export interface taskModel{
    userid:number;
    title:string;
    assignedDate:string;
    dueDate:string;
    status:string;
    id:number;
    userName:string
}

export interface taskAssignment{
    userid:number;
    id:number;
    title:string;
    assignedDate:string;
    dueDate:string;
    status:string;
    userName:string
}