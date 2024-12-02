import {db} from "../index.js"

export const getApplicationById = async (applicationId) => {
    const [rows] = await db.execute(
        `SELECT * FROM applications WHERE id = ?`,
        [applicationId]
    );
    
    return rows[0] || null;
};

