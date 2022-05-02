let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  await conn.send3Button(m.chat, `
*ミ💖 Hola estimado usuario🍷🧐 Soy el puto bot   💖彡*

*ミ🤖 Estado del Bot 🤖彡*
*=> BotDanery activo ✔️*
*=> Bot uso público ✔️*
`.trim(), '©Danery Bot', '🔷️ MENÚ 🔷', `${usedPrefix}menu`, '🔶️ MENÚ SIMPLE 🔶️', `${usedPrefix}menusimple`, '💠️ MENÚ AUDIOS 💠️', `${usedPrefix}menuaudios`)
}
handler.command = /^(estado|status|estate|state|stado|stats)$/i

handler.exp = 0

module.exports = handler
