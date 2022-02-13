const Discord = require('discord.js')
const op = ""
const devs = ["733761142152757258", "740463138918367283", "694648503301046323"]

module.exports = {
    name: "تفعيل",
    aliases: ["", ""],
    /*
    cooldown: 60000,
    */
   description: "",
   async run(bot, message, title, url, color) {/*
  if (message.channel.id != "776951987144228885")  return;
if (message.guild.id != "757272676279779469")  return;
if(!message.member.roles.cache.has(roleID)) return;*/
       const user = message.mentions.users.first()
       const tf3eluser = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:313800:849920637321609236>  | يجب عليك تحديد العضو ثم المحاولة مرة أخرى  **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(!user) return message.channel.send(tf3eluser)
       const tf3elbot = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:313800:849920637321609236>  | لا يمكن تفعيل الأرصده المصرفية للبوتات  **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(user.bot) return message.channel.send(tf3elbot)
       const amount = await bot.bal(user.id)
       const args = message.content.split(" ")
       if(isNaN(parseInt(3000))) return message.reply('**اذكر المبلغ. :x:**')
       let price = message.content.split(" ")[2]
       if(price > amount) return message.reply('**الشخص لا يملك هذه الكمية من الريال. :x:**')
       var randomNumber = require('random-number');
       let data2 = await randomNumber(NaN);
        const embed1 = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:591752:849923298053586964>  || عزيزنا المواطن   : ${user}**
        
        ** تم تفعيل حسابك المصرفي بنجاح   **

** <:453040:851757366797271040>  | الرصيد الحالي : __1000 ريال__  **

** <:453040:851757366797271040>  |   الجهة المسؤولة  :__ وزارة المالية , إدارة الحسابات المصرفية__  **


**<:4775441hnhgbg:849920637392912394>  ||  بنك البلاد ,**
   **<:618945:849924332989186058> || الـوزارة الـمالية ,**`)
       user.send(embed1)
//////////////////////////////////////////////////////////////////
       const embed = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`**<:181549:849923297386430485>   || عزيزنا موظف الجهة : ${message.author}**
        

** <:416255:851757368576442368> | تم تفعيل الحساب المصرفي للمواطن 

 وزارة المالية , إدارة الحسابات المصرفية  **

** <:346570:851758759561789470> |  المواطن : ${user}**

**<:4775441hnhgbg:849920637392912394>  ||  بنك البلاد ,**
   **<:618945:849924332989186058> || الـوزارة الـمالية ,**`)
       //.setDescription(`**${message.author}, لقد ازلت ${500} ريال من ${user}. 💸**`)
       message.channel.send(embed)
       bot.add(user.id, 3000)
   }
}
