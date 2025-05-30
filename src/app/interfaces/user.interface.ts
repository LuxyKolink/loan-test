import { Loan } from "./loan.interface";

export interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    isActive: boolean;
    loan?: Loan[];
}