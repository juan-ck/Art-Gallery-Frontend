export interface UserInterface {
    id?: number;
    name?: string;
    email?: string;
    username?: string;
    password?: string;
    cellphone?: string;
    changePassword?: Date;
    attempts?: number;
}