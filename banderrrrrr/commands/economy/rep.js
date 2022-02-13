
const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms')

module.exports = {
    name: "نقطة",
    aliases: ["rep"],
   description: "",
   async run(bot, message, title, url, color) {
     let timeout = 86400000;
  let repotime = await db.fetch(`repotime_${message.author.id}`);
  if(repotime !== null && timeout - (Date.now() - repotime > 0 )) {
    let time = ms(timeout - (Date.now() - repotime));
      message.channel.send(`**معذرة لا يمكنك استعمال هذا الامر الان. :x:**`)
} else {
       const user = message.mentions.users.first()
       if(!user) return message.reply('**منش عضو ثم جرب مرتا اخرى. :x:**')
       if(user == message.author) return message.reply('**لايمكنك اعطاء نفسك نقاط خبرة. :x:**')
       if(user.bot) return message.reply('**اظن ان الروبوتات لا تمتلك نقاط خبرة. :x:**')
       const embed = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
       .setDescription(`${message.author}, You give 1 rep to ${user}. :white_check_mark:`)
       message.channel.send(embed)
       bot.addrp(user.id, 1)
       await db.set(`repotime_${message.author.id}`, Date.now())
}
   }
}
