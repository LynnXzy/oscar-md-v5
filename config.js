global.you = ['6282146218274'] 
//Developer Bot
global.gc = 'https://chat.whatsapp.com/BcVGEUc1gHR78CpYQPM2ic'
global.rowner = ['60189830350'] // Real Owner Bot
global.owner = ['60189830350'] // Owner Bot
global.police = ['60189830350'] // Police Bot
global.mods = ['60189830350']  // Want some help?
global.prems = ['60189830350'] // Premium user has unlimited limit
global.fotonya1 = 'https://telegra.ph/file/f7505229ae221da1b4df0.png' //ini kalo mau di ganti silahkan ganti aja
global.fotonya2 = 'https://telegra.ph/file/f7505229ae221da1b4df0.png' //gw lupa nih foto apa aja:v
global.fotonya3 = 'https://telegra.ph/file/f7505229ae221da1b4df0.png' //ini juga ganti
global.fotonya4 = 'https://telegra.ph/file/f7505229ae221da1b4df0.png' //ini juga ganti
global.fotonya5 = 'https://telegra.ph/file/f7505229ae221da1b4df0.png' //ini juga ganti
global.fotonya6 = 'https://telegra.ph/file/f7505229ae221da1b4df0.png' //ini ganti pakai foto sosialmedia mu
global.fotonya7 = 'https://telegra.ph/file/f7505229ae221da1b4df0.png'
global.instagram = 'https://instagram.com/botzlynx'

global.helper = ['60189830350']
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz', 
  hardianto: 'https://hardianto.xyz',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  rey: 'https://server-api-rey.herokuapp.com',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com' 
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://hardianto.xyz': 'hardianto',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'zekais',
  'https://api.lolhuman.xyz': 'pelitbetsihluwh',
}

global.socket = {
	qr: true,
	version: false,
	logger: true,
	retryMap: false,
	pendingMessage: false,
}

global.useMulti = false

global.media = 'https://telegra.ph/file/a6180584d63dac47c6e40.png'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/efbe3e638d613d5176c2a.png'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '564588643' // default 10TB
global.fpagedoc = '444'

// Sticker WM
global.packname = '×͜× ▭▬▭▬▭▬ 👑 ▭▬▭▬▭▬ ×͜×\nﾒ 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 𝗟𝘆𝗻𝗻-𝗠𝗱\nﾒ 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 𝗟𝗮𝗻𝗻 : 60189830350\nﾒ 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 : LynnXzy ?\n⊟————————⊟'
global.author = '𝑩𝒐𝒕𝒛 𝑾𝒂'
global.wm = '© 𝑳𝒚𝒏𝒏-𝑴𝒅'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.lelang = []
global.barter = []

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
