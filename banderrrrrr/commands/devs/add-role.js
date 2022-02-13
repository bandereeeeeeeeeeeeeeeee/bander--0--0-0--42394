const Discord = require('discord.js')
const devs = ["351369612832669697", "428234449457512448", "694648503301046323"]

module.exports = {
    name: "883825891556327434",
    aliases: ["add-role", ""],
    /*
    cooldown: 60000,
    */
   description: "",
   async run(bot, message, title, url, color) {
if(!devs.includes(message.author.id)) return console.log(devs)
       const role = message.mentions.roles.first()
              const arole = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | يجب عليك تحديد الرتبة ثم المحاولة مرة أخرى **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(!role) return message.channel.send(arole)
       const args = message.content.split(" ")
       const aprice = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | الرجاء ذكر المبلغ ثم حاول مرة أخرى فضلاً **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(isNaN(parseInt(args[2]))) return message.channel.send(aprice)
       let tax = Math.floor(args[2] * (5 / 100))
       let price = message.content.split(" ")[2]
       let result = Math.floor(price - price * (5 / 100))
       const embed = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
       .setDescription(`**${message.author}, لقد اضفت ${result} ريال الى كل شخص يملك ${role}. 💸**`)
       message.channel.send(embed)

const Members = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == role))

Members.forEach(user => {
bot.add(user.id, result)
})
       
   }
}
