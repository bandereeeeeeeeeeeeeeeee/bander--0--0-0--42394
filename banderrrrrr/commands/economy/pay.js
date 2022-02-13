const Canvas = require("canvas");
const Discord = require('discord.js');
require('canvacord');

module.exports = {
    name: "تحويل",
    aliases: [],
        cooldown: 5000,
    description: "",
    async run(bot, message, title, url, color) {
     // if (message.channel.id != "858890561821212676")  return;
//if (message.guild.id != "858890561821212672")  return;
const canvas =  Canvas.createCanvas(554, 150);

const ctx = canvas.getContext('2d');
let lne = Math.floor(Math.random() * 400000);

const image = await Canvas.loadImage("https://i.ibb.co/vxLZ4ZD/121.jpg");
ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
ctx.font = `60px MyriadArabic-Regular`;
ctx.fillStyle = "#DC930B"; 
ctx.fillText(lne, 166, 89);
const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'pay.png')

let args = message.content.split(" ").slice(2).join(" ")

let user = message.mentions.users.first() 
const payuser = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:591752:849923298053586964>  || عزيزنا المواطن : ${message.author}**

** <:482514:849920638176460810>  | الرجاء منشن العضو ثم حاول مرة أخرى فضلاً **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
if (!user) return message.channel.send(payuser)

const paybot = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:591752:849923298053586964>  || عزيزنا المواطن : ${message.author}**

** <:482514:849920638176460810>  | لا يمكنك تحويل مبالغ مالية للبوتات **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
if(user.bot) return message.channel.send(paybot)

const bal = await bot.bal(message.author.id)
const payamount = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:591752:849923298053586964>  || عزيزنا المواطن : ${message.author}**

** <:482514:849920638176460810>  | الرجاء ذكر المبلغ ثم حاول مرة أخرى فضلاً  **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
if(isNaN(parseInt(args))) return message.channel.send(payamount)
const payfols = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:591752:849923298053586964>  || عزيزنا المواطن : ${message.author}**

** <:482514:849920638176460810>  | أنت لاتمتلك هذا المبلغ لإيداعه  **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
if(bal < parseInt(args)) return message.channel.send(payfols)

const payme = new Discord.MessageEmbed()
        .setColor('#FEFDFB')
        .setDescription(`** <:591752:849923298053586964>  || عزيزنا المواطن : ${message.author}**

** <:482514:849920638176460810>  | لايمكنك تحويل مبالغ مالية لنفسك  **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
if (message.author.id == user.id) return message.reply(payme)
        const amounttt = await bot.bal(message.author.id)
         const amountt = await bot.bal(user.id)
var taxval = Math.floor(parseInt(args) * (6 / 100));
var amount = Math.floor(parseInt(args) - taxval);
const msg = await message.channel.send(`**${message.author.username}, Transfer Fees: \`${taxval}\`, Amount :\`$${amount}\`**\ntype these numbers to confirm :`,{files:[attachment]})//.setImage(buffer));
const responses =  message.channel.awaitMessages(response => response.content.includes(lne), {
max: 1,
time: 20000,
errors: ['time'],
}) .then( async ( collected) => {

msg.delete().catch(()=>{});


message.author.lastMessage.delete()
var randomNumber = require('random-number');
let data2 = await randomNumber(NaN);
const embed = new Discord.MessageEmbed()
.setColor('#FEFDFB')
//.setDescription(`**${message.author}, لقد حولت ${amount} ريال الى ${user}.**`)
.setDescription(`** <:591752:849923298053586964>  | عزيزنا المواطن : ${message.author} **

** <:319650:852144910282260500>  |  لقـد تم تحويل مبلغ __\`${amount}\`__ في رصيد المواطن ${user} **

** <:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
message.channel.send(embed)
//////////////////////////////////////////////////////////////////////////
const embed1 = new Discord.MessageEmbed()
.setColor('#FEFDFB')
.setDescription(`** <:591752:849923298053586964>  || عزيزنا المواطن : ${user}**

** تم إيداع مبلغ بقيمة __\`${amount}\`__ ريال إلى حسابك**

** <:319650:849920638218534973>  | عملية التحويل بواسطة : ${message.author} **

** <:319650:849920638218534973>  | نوع العملية : حوالة شخصية **

** <:319650:849920638218534973>  | رقم العملية :  ${data2} **

** <:319650:849920638218534973>  | رصيدك الإجمالي :  ${amountt + amount}  **  


**<:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
 **<:618945:849924332989186058>  || الوزارة المالية , **`)
user.send(embed1)
///////////////////////////////////////////////////////////////////////////
const embed2 = new Discord.MessageEmbed()
.setColor('#FEFDFB')
.setDescription(`** <:591752:849923298053586964>  || عزيزنا المواطن : ${message.author}**

** تم خصم مبلغ بقيمة __\`${amount}\`__  ريال من حسابك وإيداعه إلى ${user}  **

** <:319650:849920638218534973>  | نوع العملية : حوالة شخصية **

** <:319650:849920638218534973>  | رقم العملية :  ${data2} **

** <:319650:849920638218534973>  | رصيدك الإجمالي :  ${amounttt - amount}  **


**<:4775441hnhgbg:849920637392912394>  || بنك البلاد , **
** <:618945:849924332989186058>  || الوزارة المالية , **`)
message.author.send(embed2)
bot.add(user.id, amount)
bot.remove(message.author.id, amount)
})
    }}