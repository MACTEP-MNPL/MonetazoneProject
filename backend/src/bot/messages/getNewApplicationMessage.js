import {getApplicationById} from "../../db/getApplicationById.js"

export const getNewApplicationMessage = async (applicationId) => {
    
    const application = await getApplicationById(applicationId)

    return `New application: ${application}`
}

