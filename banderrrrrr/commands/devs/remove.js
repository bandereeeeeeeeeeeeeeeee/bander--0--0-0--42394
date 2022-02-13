const Discord = require('discord.js')

const devs = ["351369612832669697", "428234449457512448", "694648503301046323"]

module.exports = {
    name: "ازالة",
    aliases: ["remove", "سحب"],
    /*
    cooldown: 60000,
    */
   description: "",
   async run(bot, message, title, url, color) {
if(!devs.includes(message.author.id)) return console.log(devs)
       const user = message.mentions.users.first()
       const reuser = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | يجب عليك تحديد العضو ثم المحاولة مرة أخرى **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(!user) return message.channel.send(reuser)
       const rebot = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | لايمكنك حذف المبالغ المالية من البوتات **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(user.bot) return message.channel.send(rebot)
       const amount = await bot.bal(user.id)
       const args = message.content.split(" ")
       const reprice = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | الرجاء ذكر المبلغ ثم حاول مرة أخرى فضلاً **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(isNaN(parseInt(args[2]))) return message.channel.send(reprice)
       let price = message.content.split(" ")[2]
       const re3dd = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | هذا الشخص لا يمتلك هذه الكمية من الرصيد **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(price > amount) return message.channel.send(re3dd)
       const embed = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
       .setDescription(`**${message.author}, لقد ازلت ${price} ريال من ${user}. 💸**`)
       message.channel.send(embed)
       bot.remove(user.id, price)
   }
}