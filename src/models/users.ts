export interface usersData{
    firstName:string;
    lastName: string;
    email:string;
    password:string;
    role:string;
    isLogged:boolean;
    id:number;
    completedTaskCount:number;
}

export interface sessionData{
    email:string;
    role:string;
    userId:number;
    firstName:string;
}

export interface userRanking{
    name: string,
    userId:number,
    id:number,
    score: number,
    taskCompleted:number,
    taskPending:number,
    taskAssigned:number
}