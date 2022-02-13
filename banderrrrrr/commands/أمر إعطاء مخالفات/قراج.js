const Discord = require('discord.js')
const op = "734538809756090398"
const roleID = "795329768202698772"
module.exports = {
    name: "قراج",
    aliases: ["", ""],
    /*
    cooldown: 60000,
    */
   description: "",
   async run(bot, message, title, url, color) { /*
  if (message.channel.id != "852954465095254026")  return;
if (message.guild.id != "757272676279779469")  return;
if(!message.member.roles.cache.has(roleID)) return;*/
       const user = message.mentions.users.first()
       const jraguser = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:313800:849920637321609236>  | يجب عليك تحديد العضو ثم المحاولة مرة أخرى  **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(!user) return message.channel.send(jraguser)
       const jragbot = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:313800:849920637321609236>  | لا يمكن فرض رسوم تأجير المركبة للبوتات  **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(user.bot) return message.channel.send(jragbot)
       const amount = await bot.bal(user.id)
       const args = message.content.split(" ")
       if(isNaN(parseInt(120))) return message.reply('**اذكر المبلغ. :x:**')
       let price = message.content.split(" ")[2]
       if(price > amount) return message.reply('**الشخص لا يملك هذه الكمية من الريال. :x:**')
       var randomNumber = require('random-number');
       let data2 = await randomNumber(NaN);
        const embed1 = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:591752:849923298053586964>  || عزيزنا المواطن  : ${user}**
        

        ** تـم خصم رسوم تأجير المركبة من رصيدك   **

** <:453040:851757366797271040>  | رسوم تأجير المركبة : __120 ريال__  **

** <:453040:851757366797271040>  |   جهة الخدمة  :__مكتب وولف للتأجير__  **


**<:4775441hnhgbg:849920637392912394>  ||  بنك البلاد ,**
   **<:618945:849924332989186058> || الـوزارة الـمالية ,**`)
       user.send(embed1)
//////////////////////////////////////////////////////////////////
       const embed = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`**<:181549:849923297386430485>   || عزيزنا موظف الجهة : ${message.author}**
        

** <:416255:851757368576442368> | تم خصم رسوم تأجير المركبة   مكتب وولف للتأجير  **

** <:346570:851758759561789470> |  المواطن : ${user}**

**<:4775441hnhgbg:849920637392912394>  ||  بنك البلاد ,**
   **<:618945:849924332989186058> || الـوزارة الـمالية ,**`)
       //.setDescription(`**${message.author}, لقد ازلت ${500} ريال من ${user}. 💸**`)
       message.channel.send(embed)
       bot.remove(user.id, 120)
       bot.add(op, 120)
   }
}