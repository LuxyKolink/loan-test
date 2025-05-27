export interface Loan {
    id: number;
    amount: number;
    interestRate: number;
    term: number;
    startDate: Date;
    endDate: Date;
    status: LoanStatus;
}

export type LoanStatus = "pending" | "approved" | "rejected" | "paid";