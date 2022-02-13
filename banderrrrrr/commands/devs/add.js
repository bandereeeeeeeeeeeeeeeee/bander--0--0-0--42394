const Discord = require('discord.js')

const devs = ["733761142152757258", "740463138918367283", "694648503301046323"]

module.exports = {
    name: "اضافة",
    aliases: ["add", ""],
    /*
    cooldown: 60000,
    */
   description: "",
   async run(bot, message, title, url, color) {
if(!devs.includes(message.author.id)) return console.log(devs)
       const user = message.mentions.users.first()
       const auser = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | يجب عليك تحديد العضو ثم المحاولة مرة أخرى **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(!user) return message.channel.send(auser)
       const abot = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | لايمكنك إعطاء البوتات مبالغ مالية **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(user.bot) return message.channel.send(abot)
       const args = message.content.split(" ")
       const aprice2 = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | الرجاء ذكر المبلغ ثم حاول مرة أخرى فضلاً  **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(isNaN(parseInt(args[2]))) return message.channel.send(aprice2)
       let tax = Math.floor(args[2] * (5 / 100))
       let price = message.content.split(" ")[2]
       let result = Math.floor(price)
       const embed = new Discord.MessageEmbed()
        .setColor('RED')
       .setDescription(`**${message.author}, لقد اضفت ${result} ريال الى ${user}. 💸**`)
       message.channel.send(embed)
       bot.add(user.id, result)
   }
}