export interface UserResponse {
    user: User;
    token: string;
    refreshToken: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface User {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    photo: string;
    phoneNumber: string;
}
