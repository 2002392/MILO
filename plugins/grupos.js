let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete al grupo oficial para pasar un rato agradable usando el Bot*
Grupo oficial https://chat.whatsapp.com/EVrT2S9PC4bKzxRgcbKdll
*_➤ creador Danery contactalo:_*
*_1.-_* *wa.me/18292077732*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥DaneryBot🔥*', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
