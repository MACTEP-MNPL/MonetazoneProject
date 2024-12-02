import dotenv from 'dotenv'
import {Bot} from "grammy"
import axios from 'axios'
import {db} from "../index.js"
import {getNewApplicationMessage} from "./messages/getNewApplicationMessage.js"
import {getApplicationById} from "../db/getApplicationById.js"

dotenv.config()

const {TG_BOT_TOKEN} = process.env

export const bot = new Bot(TG_BOT_TOKEN)

bot.command('start', async (ctx) => {
    await ctx.reply("HI LOX)")

    //const [row] = await db.execute("INSERT INTO users (id, username) VALUES (?, ?)", [ctx.from.id, ctx.from.username])
    //console.log(row)

    const application = await getApplicationById(2)
    console.log(application)

    await ctx.reply(await getNewApplicationMessage(application.id))
})


