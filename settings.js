/*
* 𝙊𝙬𝙚𝙣𝙨𝘿𝙚𝙫
* 𝘵𝘦𝘭𝘦: https://t.me/owenssw
* 𝘪𝘯𝘧𝘰: -
* 𝘺𝘵: https://youtube.com/CekGem
* 𝘔𝘢𝘬𝘦𝘳: https://whatsapp.com/channel/0029VaRI1OB2P59cTdJKZh3q
* 𝙶𝚛𝚘𝚞𝚙: https://chat.whatsapp.com/LQBLGAalERjE1P5X3REnGC

* 🚨Di Larang Menghapus Wm Ini🚨
* #𝗛𝗮𝗿𝗴𝗮𝗶𝗹𝗮𝗵 𝗣𝗲𝗺𝗯𝘂𝗮𝘁  
*/

const fs = require('fs')
const chalk = require('chalk')

// BOT-INFO
global.botName = "UNKNOWNBOT"
global.ownerName = "UNKNOWN"
global.botNumber = "6285971171024"
global.devNumber = ["6283141525783"]

// ADMIN-PANEL
global.locID = "1" // Jangan Diganti
global.eggID = "15" // Jangan Diganti
global.domain = "https://example.com" // Ganti Domain Lu
global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "OwensDev" // Ganti Nama Store Atau nama Host Lu

// BOT-SETTING
global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = true // auto read messages

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})