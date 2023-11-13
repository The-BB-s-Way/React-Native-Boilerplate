import { AuthUser } from './user.interface';
export interface LoginRequest {
    Email: string
    Password: string
    [key: string]: string
}

export interface LoginResponse {
    Token: string
    User: AuthUser
    IsAdmin?: boolean
}