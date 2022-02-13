
const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms')

module.exports = {
    name: "راتب",
    aliases: ['daily', 'reward'],
    
    cooldow: 60000,
    
    //1second = 1000ms
  
    description: "",
    async run(bot, message, args, title, url, color) {
      let timeout = 86400000;
    let dailytime = await db.fetch(`dailytime_${message.author.id}`);
    if(dailytime !== null && timeout - (Date.now() - dailytime > 0 )) {
      let time = ms(timeout - (Date.now() - dailytime));
        message.channel.send(`**معذرة لا يمكنك استعمال هذا الامر الان. :x:**`)
    } else {
        const amount = Math.floor(Math.random()*2000) + 250
        const embed = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`**${message.author}, مبروك لقد حصلت على ${amount} ريال. 💰**`)
        message.channel.send(embed)
        bot.add(message.author.id, amount)
        await db.set(`dailytime_${message.author.id}`, Date.now());
    }
    }
}
