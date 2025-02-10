import {bot} from "./bot/bot.js"
import {app} from "./server/server.js"
import {pool} from "./db/db.js"

const PORT = process.env.PORT || 3000;

export const db = await pool.getConnection()

bot.start({ allowed_updates: ['chat_member',"message",
    "edited_message",
    "channel_post",
    "edited_channel_post",
    "business_connection",
    "business_message",
    "edited_business_message",
    "deleted_business_messages",
    "inline_query",
    "chosen_inline_result",
    "callback_query",
    "shipping_query",
    "pre_checkout_query",
    "poll",
    "poll_answer",
    "my_chat_member",
    "chat_join_request",
    "chat_boost",
    "removed_chat_boost"] })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

