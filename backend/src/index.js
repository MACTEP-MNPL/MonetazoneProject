import {bot} from "./bot/bot.js"
import {app} from "./server/server.js"
import {pool} from "./db/db.js"

const PORT = process.env.PORT || 3000;

export const db = await pool.getConnection()

bot.start()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

