let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Caja.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
*_ãð Hola ${username} ðå½¡_*

ã¤ã¤ *ð³ï¸<CAJA FUERTE/>ð*
- AquÃ­ puede guardar mensajes que quieras ver mas tarde

*<AGREGAR A LA LISTA/>*

Â° à¶¬âð³ï¸ _${usedPrefix}agregarmsg *texto/comando/palabra clave* (responde a un texto)_
Â° à¶¬âð³ï¸ _${usedPrefix}agregarvn *texto/comando/palabra clave* (responde a una nota de voz)_
Â° à¶¬âð³ï¸ _${usedPrefix}agregarvideo *texto/comando/palabra clave* (responde a un video)_
Â° à¶¬âð³ï¸ _${usedPrefix}agregaraudio *texto/comando/palabra clave* (responde a un audio)_
Â° à¶¬âð³ï¸ _${usedPrefix}agregarimg *texto/comando/palabra clave* (responde a una imagen)_
Â° à¶¬âð³ï¸ _${usedPrefix}agregarsticker *texto/comando/palabra clave* (responde a un sticker)_

*<LISTAS DE COMANDOS/>*

Â° à¶¬âð³ï¸ _${usedPrefix}listamsg_
Â° à¶¬âð³ï¸ _${usedPrefix}listavn_
Â° à¶¬âð³ï¸ _${usedPrefix}listavideo_
Â° à¶¬âð³ï¸ _${usedPrefix}listaaudio_
Â° à¶¬âð³ï¸ _${usedPrefix}listaimg_
Â° à¶¬âð³ï¸ _${usedPrefix}listasticker_

*<VER TEXTOS O ARCHIVOS/>*

Â° à¶¬âð³ï¸ _${usedPrefix}vermsg *texto/comando/palabra clave*_
Â° à¶¬âð³ï¸ _${usedPrefix}vervn *texto/comando/palabra clave*_
Â° à¶¬âð³ï¸ _${usedPrefix}vervideo *texto/comando/palabra clave*_
Â° à¶¬âð³ï¸ _${usedPrefix}veraudio *texto/comando/palabra clave*_
Â° à¶¬âð³ï¸ _${usedPrefix}verimg *texto/comando/palabra clave*_
Â° à¶¬âð³ï¸ _${usedPrefix}versticker *texto/comando/palabra clave*_

*<ELIMINAR/>*

Â° à¶¬âð³ï¸ _${usedPrefix}eliminarmsg *texto/comando/palabra clave*_
Â° à¶¬âð³ï¸ _${usedPrefix}eliminarvn *texto/comando/palabra clave*_
Â° à¶¬âð³ï¸ _${usedPrefix}eliminarvideo *texto/comando/palabra clave*_
Â° à¶¬âð³ï¸ _${usedPrefix}eliminaraudio *texto/comando/palabra clave*_
Â° à¶¬âð³ï¸ _${usedPrefix}eliminarimg *texto/comando/palabra clave*_
Â° à¶¬âð³ï¸ _${usedPrefix}eliminarsticker *texto/comando/palabra clave*_

*_Â©ðâ²â²â²â²â²-â²â²â²§_*`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menusimple']
handler.tags = ['General']
handler.command = /^(CajaFuerte)$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
