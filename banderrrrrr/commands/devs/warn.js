
const Canvas = require("canvas");
const Discord = require('discord.js')
const { registerFont } = require("canvas")
registerFont('fount.ttf', { family: 'MyriadArabic-Regular' })

const devs = ["733761142152757258", "740463138918367283", "694648503301046323"]

module.exports = {
    name: "مخالفه",
    aliases: ['warn', 'مخالفة'],
    description: "",
    async run(bot, message, title, url, color) {
if(!devs.includes(message.author.id)) return console.log(devs)
let user = message.mentions.users.first() 

if (!user) return message.reply('**منشن عضو ثم جرب مرتا اخرى. :x:**')

const bal = await bot.bal(user.id)

if(user.bot) return message.reply('**اظن ان الروبوتات لا تمتلك مخالفاتا. :x:**')


if (message.author.id == user.id) return message.reply('**اظن انه لا يمكن مخالفة نفسك. :x:**')

if(bal < 500) return message.reply('**ميزانية الشخص اقل من 500. :x:**')

const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`**${message.author}, لقد قمت باعطاء محالفة ل${user} و تم سحب منه 500 ريال. 💸**`)
message.channel.send(embed)

bot.remove(user.id, 500)
bot.add(message.author.id, 500)
    }
}
