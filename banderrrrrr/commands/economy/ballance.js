const Discord = require('discord.js')

module.exports = {
    name: "فلوسي",
    aliases: ['فلوس', ''],
    
    cooldown: 5000,
    
    
    description: "",
    async run(bot, message, args, title, url, color) {
     //if (message.channel.id != "852953847068491816")  return;
//if (message.guild.id != "757272676279779469")  return;
        const user = message.mentions.users.first() || message.author
        const amount = await bot.bal(user.id)
        const embed = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(` <:591752:849923298053586964>  **|| عزيزنا المواطن : ${user} **

**إجمالي رصيدك هـو  __\`${amount}\`__  ريال**


  <:4775441hnhgbg:849920637392912394>** || بنك البلاد , **
  <:618945:849924332989186058>** || الـوزارة الـمالية , **`)
        message.channel.send(embed)
message.channel.send('https://cdn.discordapp.com/attachments/851722537045852181/852442301556326430/d955c5ff7741a5c7.jpg')
  
    }
}