import { db } from '../index.js';

export const createCashTypeApplication = async (req) => {
    const {
        name,
        date,
        office,
        type,
        details
    } = req.body;

    const ip = req.ip || req.connection.remoteAddress;

    if (type === 'cash_exchange') {
        const {
            giveAmount,
            giveAmountCurrency,
            getAmount,
            getAmountCurrency,
            rate
        } = details;

        const [response] = await db.execute(
            `INSERT INTO cash_applications (
                name,
                date,
                office,
                type,
                give_amount,
                give_amount_currency,
                get_amount,
                get_amount_currency,
                exchange_rate,
                ip,
                status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                name,
                date,
                office,
                type,
                giveAmount,
                giveAmountCurrency,
                getAmount,
                getAmountCurrency,
                rate,
                ip,
                'created'
            ]
        );

        return response;
    } else if (type === 'cash_withdrawal') {
        const {
            country,
            currency,
            city,
            cashCurrency
        } = details;

        const [response] = await db.execute(
            `INSERT INTO cash_applications (
                name,
                date,
                office,
                type,
                country,
                currency,
                city,
                cash_currency,
                ip,
                status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                name,
                date,
                office,
                type,
                country,
                currency,
                city,
                cashCurrency,
                ip,
                'created'
            ]
        );

        return response;
    }

    throw new Error('Invalid cash application type');
};