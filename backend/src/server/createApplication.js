import { db } from '../index.js';

export const createApplication = async (type) => {

    const [result] = await db.execute(
        'INSERT INTO applications (type) VALUES (?)',
        [type]
    )

    return result.insertId
};
