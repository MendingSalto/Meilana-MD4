let fs = require('fs')

let flaaa = JSON.parse(fs.readFileSync('./api/fla.json'))
let waifu = JSON.parse(fs.readFileSync('./api/waifu.json'))
let data = JSON.parse(fs.readFileSync('./data.json'))


global.owner = JSON.parse(fs.readFileSync('./settings/owner.json')) // Put your number to folder /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./settings/moderator.json')) // Want some help?
global.prems = JSON.parse(fs.readFileSync('./settings/premium.json'))

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz',
  males: 'https://malest.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'yntkts',
   'https://api.xteam.xyz': 'apivproject',
  'https://melcanz.com': 'elaina',
  'https://api.lolhuman.xyz': 'pkebgk8248jskrkfm',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://api.adiofficial.xyz': 'adiofficial'
}

global.wait = '_*𝐬𝐞𝐝𝐚𝐧𝐠 𝐝𝐢 𝐩𝐫𝐨𝐬𝐞𝐬 ...*_'
global.eror = '_*мααƒ ѕєяνєя тι∂αк ѕтαвιℓ..*_'

//========Url Template Buttons=========//
global.dtu = 'ɪɴꜱᴛᴀɢʀᴀᴍ'
global.urlnya = "https://www.instagram.com/callme_rey1003_"

//============= callButtons =============//
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+13049948857'

//============= Games ================//
global.benar = '_*Benar✅*_'
global.salah = '_*Salah❌*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 100 // The higher, The harder levelup

// Sticker WM
global.packname = data.namabot;
global.author = data.owner;

//=========== Design ==========//
global.linkgc = "https://chat.whatsapp.com/JOTpyCQIWcC6wr17Ki7L0n",
global.linkig = "https://www.instagram.com/callme_rey1003_",
global.linkgh = "https://github.com/MendingTuru",
global.deslink = " ",
global.titlink = "Folllow me on Instagram",
global.bodlink = "@callme_rey1003_",
global.sa = "╭─",
global.gx = "│✇",
global.gy = "│•",
global.gz = "│",
global.sb = "╰────࿐",
global.kki = "「",
global.kka = "」",
global.petik = "```",
global.images = "https://telegra.ph/file/be35f3f279c9af2d607e8.jpg",
global.wmnya = "ву ᵈʳᴋᴏᴋᴏ ®ey",
global.clg1 = "Ciss 📸",
global.clg2 = "ʙy ᵈʳᴋᴏᴋᴏ ®ey×፝֟͜×"

//=========== Requirements ==========//  
        global.colong1 = 'Ciss 📸'
        global.colong2 = 'ʙy ᵈʳKoKo•Rey-ᴍᴅ'
global.img = pickRandom(waifu)
global.fla = pickRandom(flaaa)

/*============== PAYMENT ==============*/
global.saweria = "https://saweria.co/kokopangeran"// website saweria.co
global.dana = ["085232604817"]
global.pulsa = ["085232604817"] //pulsa here
global.trakteer = "https://trakteer.id/kokopangeran"//Link url https://
global.paypal = "pangeran.dwnta01@gmail.com" //paypal email
global.gopay = "087832147584"//Numver for Payment digital Gopay Gojek
global.instagram = "https://instagram.com/callme_rey1003_

/*============== PAYMENT ==============*/
global.pdana = '087832147584'
global.povo = '087832147584'
global.pgopay = '087832147584'
global.ppulsa = '087832147584'
global.ppulsa2 = '087832147584'
global.psaweria = 'https://saweria.com/kokopangeran'



global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
