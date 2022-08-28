export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    hashPassword(): Promise<void>;
}
