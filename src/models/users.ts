export interface usersData{
    firstName:string;
    lastName: string;
    email:string;
    password:string;
    role:string;
    isLogged:boolean;
}

export interface sessionData{
    email:string;
    role:string;
}