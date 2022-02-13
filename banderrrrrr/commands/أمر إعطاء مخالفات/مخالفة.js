const Discord = require('discord.js')
const op = "734538809756090398"
const roleID = "795329768202698772"
module.exports = {
    name: "مخالفة",
    aliases: ["", "مخالفه"],
    
    /*cooldown: 60000,*/
    
   description: "",
   async run(bot, message, title, url, color) {/*
 if (message.channel.id != "852954465095254026")  return;
if (message.guild.id != "757272676279779469")  return;
if(!message.member.roles.cache.has(roleID)) return;*/
       const user = message.mentions.users.first()
       const m5user = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | يجب عليك تحديد العضو ثم المحاولة مرة أخرى **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(!user) return message.channel.send(m5user)
       const m5bot = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | لا يمكن إعطاء البوتات مخالفات مالية  **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(user.bot) return message.channel.send(m5bot)
       const amount = await bot.bal(user.id)
       const args = message.content.split(" ")
        const m53dd = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:482514:849920638176460810>  | الرجاء ذكر المبلغ ثم حاول مرة أخرى فضلاً  **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(isNaN(parseInt(args[2]))) return message.channel.send(m53dd)
       let price = message.content.split(" ")[2]
       if(price > price) return message.reply('**الشخص لا يملك هذه الكمية من الريال. :x:**')
       var randomNumber = require('random-number');
       let data2 = await randomNumber(NaN);
        const embed1 = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا المواطن : ${user}**
        
        **تـم قيد مخالفة قيمتها __${price} ريال__  وخصمها من رصيدك**

** <:323101:849920637090005003>  | رقم المخالفة : __${data2}__  **

** <:323101:849920637090005003>  |   سجل رقم :__ ${user.id}__  **

** <:323101:849920637090005003>  |   للمزيد من التفاصيل يرجى زيارة <#853659471402631178>  **

**<:4775441hnhgbg:849920637392912394>  ||  بنك البلاد ,**
   **<:618945:849924332989186058> || الـوزارة الـمالية ,**`)
       user.send(embed1)
//////////////////////////////////////////////////////////////////
       const embed = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`**<:181549:849923297386430485>   || عزيزنا موظف الجهة : ${message.author}**
        
        **تـم تسجيل مخالفة قيمتها  __${price}__ ريال**

** <:591752:849923298053586964>  |  على المواطن : ${user}**

** <:323101:849920637090005003>  | رقم المخالفة : __${data2}__  **

**<:477544:849920638579376168>  | تم تنبيه المواطن في الخاص**

**<:4775441hnhgbg:849920637392912394>  ||  بنك البلاد ,**
   **<:618945:849924332989186058> || الـوزارة الـمالية ,**`)
       //.setDescription(`**${message.author}, لقد ازلت ${500} ريال من ${user}. 💸**`)
       message.channel.send(embed)
       bot.remove(user.id, price)
       bot.add(op, price)
   }
}
