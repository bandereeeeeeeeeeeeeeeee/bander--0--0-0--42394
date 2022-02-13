/*
const Discord = require('discord.js')
const op = "694648503301046323"
const devs = ["351369612832669697", "428234449457512448", "694648503301046323"]
module.exports = {
    name: "العام",
    aliases: ["", ""],
    
    cooldown: 60000,
    
   description: "",
   async run(bot, message, title, url, color) {
if(!devs.includes(message.author.id)) return console.log(devs)
       const user = message.mentions.users.first()
       const al3amuser = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:313800:849920637321609236>  | يجب عليك تحديد العضو ثم المحاولة مرة أخرى  **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(!user) return message.channel.send(al3amuser)
       const al3ambot = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:313800:849920637321609236>  | لا يمكن فرض رسوم التوظيف للبوتات  **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(user.bot) return message.channel.send(al3ambot)
       const amount = await bot.bal(user.id)
       const args = message.content.split(" ")
       if(isNaN(parseInt(150))) return message.reply('**اذكر المبلغ. :x:**')
       let price = message.content.split(" ")[2]
       if(price > amount) return message.reply('**الشخص لا يملك هذه الكمية من الريال. :x:**')
       var randomNumber = require('random-number');
       let data2 = await randomNumber(NaN);
        const embed1 = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:591752:849923298053586964>  || عزيزنا الموظف المستجد  : ${user}**
        
        ** تـم خصم رسوم التوظيف من رصيدك   **

** <:453040:851757366797271040>  | رسوم التوظيف : __150 ريال__  **

** <:453040:851757366797271040>  |   جهة التوظيف  :__ وزارة الداخلية , قطاع الأمـن العام__  **


**<:4775441hnhgbg:849920637392912394>  ||  بنك البلاد ,**
   **<:618945:849924332989186058> || الـوزارة الـمالية ,**`)
       user.send(embed1)
//////////////////////////////////////////////////////////////////
       const embed = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`**<:181549:849923297386430485>   || عزيزنا موظف الجهة : ${message.author}**
        

** <:416255:851757368576442368> | تم خصم الرسوم الوظيفية  لوزارة الداخلية , الأمن العام  **

** <:346570:851758759561789470> |  الموظف المستجد : ${user}**

**<:4775441hnhgbg:849920637392912394>  ||  بنك البلاد ,**
   **<:618945:849924332989186058> || الـوزارة الـمالية ,**`)
       //.setDescription(`**${message.author}, لقد ازلت ${500} ريال من ${user}. 💸**`)
       message.channel.send(embed)
       bot.remove(user.id, 150)
       bot.add(op, 150)
   }
}

const Discord = require('discord.js')
const op = "694648503301046323"
const devs = ["351369612832669697", "428234449457512448", "694648503301046323"]
module.exports = {
    name: "القوات",
    aliases: ["", ""],
    
    cooldown: 60000,
    
   description: "",
   async run(bot, message, title, url, color) {
if(!devs.includes(message.author.id)) return console.log(devs)
       const user = message.mentions.users.first()
       const al3amuser = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:313800:849920637321609236>  | يجب عليك تحديد العضو ثم المحاولة مرة أخرى  **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(!user) return message.channel.send(al3amuser)
       const al3ambot = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:181549:849923297386430485>  || عزيزنا موظف الجهة : ${message.author}**

** <:313800:849920637321609236>  | لا يمكن فرض رسوم التوظيف للبوتات  **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
       if(user.bot) return message.channel.send(al3ambot)
       const amount = await bot.bal(user.id)
       const args = message.content.split(" ")
       if(isNaN(parseInt(150))) return message.reply('**اذكر المبلغ. :x:**')
       let price = message.content.split(" ")[2]
       if(price > amount) return message.reply('**الشخص لا يملك هذه الكمية من الريال. :x:**')
       var randomNumber = require('random-number');
       let data2 = await randomNumber(NaN);
        const embed1 = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:591752:849923298053586964>  || عزيزنا الموظف المستجد  : ${user}**
        
        ** تـم خصم رسوم التوظيف من رصيدك   **

** <:453040:851757366797271040>  | رسوم التوظيف : __150 ريال__  **

** <:453040:851757366797271040>  |   جهة التوظيف  :__ وزارة الداخلية , قطاع قوات الأمـن الخاصة__  **


**<:4775441hnhgbg:849920637392912394>  ||  بنك البلاد ,**
   **<:618945:849924332989186058> || الـوزارة الـمالية ,**`)
       user.send(embed1)
//////////////////////////////////////////////////////////////////
       const embed = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`**<:181549:849923297386430485>   || عزيزنا موظف الجهة : ${message.author}**
        

** <:416255:851757368576442368> | تم خصم الرسوم الوظيفية  لوزارة الداخلية , قوات  **

** <:346570:851758759561789470> |  الموظف المستجد : ${user}**

**<:4775441hnhgbg:849920637392912394>  ||  بنك البلاد ,**
   **<:618945:849924332989186058> || الـوزارة الـمالية ,**`)
       //.setDescription(`**${message.author}, لقد ازلت ${500} ريال من ${user}. 💸**`)
       message.channel.send(embed)
       bot.remove(user.id, 150)
       bot.add(op, 150)
   }
}
*/