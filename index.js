const { Telegraf } = require('telegraf')

const bot = new Telegraf("TOKEN_KODUNUZ")
bot.start((ctx) => ctx.reply('Döviz Sorgulama Botu'))   //   /start komutu gelirse
bot.help((ctx) => ctx.reply('/doviz komutunu verince bize gelen mesaja para biriminin kısaltmasını vereceğiz,  /quit komutu da bize hoşçakal diyecektir'))   //  /help   komutu gelirse

bot.command('quit', (ctx) => {
    ctx.reply("Doviz Botu Size Hoşçakal Dedi")
})

bot.launch()   // botu çalıştır

bot.command("doviz",(ctx)=>{
    ctx.replyWithMarkdown('Bana bir para birimi gönder (Örneğin: usd,eur)');
});

bot.on('text', (ctx) => {
        (async () => {
            const TCMB_Doviz = require('tcmb-doviz');
            const Doviz = new TCMB_Doviz();
            const res = await Doviz.DovizListesi();
            console.log(res);
        })();
})
