let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete al grupo oficial para pasar un rato agradable usando el Bot*
Grupo oficial https://chat.whatsapp.com/L6elaMyZ57cJ3R3smRAEXs
*_➤ creador Danery contactalo no bot:_*
*_1.-_* *wa.me/18292077732*
*_➤ Bot oficial:_*
*_1.-_* *wa.me/573106442515*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥DaneryBot🔥*', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
