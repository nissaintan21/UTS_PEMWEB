//request login
export type LoginInput={
    username:string;
    password:string;
}
//response login
export type LoginResponse={
    token:string;
    user:User
}

export type User={
    id:number;
    name:string;
    email:string;
}