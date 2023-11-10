import { AuthUser } from './user.interface';
export interface LoginRequest {
    Email: string
    Password: string
    [key: string]: string
}

export interface LoginResponse {
    AccessToken: string
    User: AuthUser
    IsAdmin?: boolean
}