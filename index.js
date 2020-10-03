import { Bot } from 'https://deno.land/x/telegram@v0.0.3/mod.ts'
import { deserializeFeed } from 'https://raw.githubusercontent.com/MikaelPorttila/rss/master/mod.ts'
import { settings } from './config.js'

const { RSS_URL, TELEGRAM_TOKEN } = settings
const bot = new Bot(TELEGRAM_TOKEN)

const fetchNews = async () => {
  const xml = await (await fetch(RSS_URL)).text()
  const [feedType, feed] = await deserializeFeed(xml);
  const items = await JSON.parse(JSON.stringify(feed.channel.items))

  return [ ...items ]
}

// Error handler
bot.use(async (ctx, next) => {
  try {
    await next(ctx)
  } catch (err) {
    console.error(err.message)
  }
})

bot.on("text", async ctx => {
  const text = ctx.message?.text
  const order = text.split(' ')
  const limit = order[1] || 3

  if (order[0] === "/start") await ctx.reply("Bem-vindo a este RSS chatbot. Eis os comandos:\n /last » Últimas Três Notícias\n /last <numero> » Últimas N Notícias")
  if (order[0] === "/last") {
    const news = await fetchNews()
    let count = 0

    for (var key of Object.keys(news)) {
      if (typeof news[key].link === 'string' && count < limit) {
        await ctx.reply(`${news[key].link}`)
        count++
      }
    }
  }
})

bot.launch()
