
const Discord = require('discord.js')
const op = "740463138918367283"
const devs = ["733761142152757258", "740463138918367283", "694648503301046323"]

module.exports = {
    name: "مخالفة",
    aliases: ["مخالفه", "warn"],
    
    cooldown: 60000,
   
   description: "",
   async run(bot, message, title, url, color) {
if(!devs.includes(message.author.id)) return console.log(devs)
       const user = message.mentions.users.first()
       const re2user = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | يجب عليك تحديد العضو ثم المحاولة مرة أخرى **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(!user) return message.channel.send(re2user)
       const re2bot = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | لايمكنك حذف المبالغ المالية من البوتات **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(user.bot) return message.channel.send(re2bot)
       const amount = await bot.bal(user.id)
       const args = message.content.split(" ")
       const re2price = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | الرجاء ذكر المبلغ ثم حاول مرة أخرى فضلاً **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(isNaN(parseInt(args[2]))) return message.channel.send(re2price)
       let price = message.content.split(" ")[2]
       const re23dd = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | هذا الشخص لا يمتلك هذه الكمية من الرصيد **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(price > amount) return message.channel.send(re23dd)
       const embed = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
       .setDescription(`**${message.author}, تم تحرير مخالفة مالية بقيمة ${price} ريال من ${user}. 💸**`)
       message.channel.send(embed)
       bot.remove(user.id, price)
       bot.add(op, price)
   }
}
