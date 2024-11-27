export interface BaseApplicationData {
    name: string;
    date: string;
    office: string;
}

export interface FeaApplicationData extends BaseApplicationData {
    type: 'fea';
    details: {
        typeOfService: string;
        paymentAssignment: string;
        fundsJurisdiction: string;
        intakeMoneyJurisdiction: string;
        amount: string;
        paymentMethod: string;
    };
}

export interface SwiftApplicationData extends BaseApplicationData {
    type: 'swift';
    details: {
        paymentSystem: string;
        paymentAssignment: string;
        country: string;
        currency: string;
        intakeCurrency: string;
        amount: string;
    };
}

export interface CashExchangeApplicationData extends BaseApplicationData {
    type: 'cash_exchange';
    details: {
        giveAmount: string;
        giveAmountCurrency: string;
        getAmount: string;
        getAmountCurrency: string;
        rate: number | null;
    };
}

export interface CashWithdrawalApplicationData extends BaseApplicationData {
    type: 'cash_withdrawal';
    details: {
        country: string;
        currency: string;
        city: string;
        cashCurrency: string;
    };
}

export type CashApplicationData = CashExchangeApplicationData | CashWithdrawalApplicationData;
