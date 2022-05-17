let handler = async (m, { conn }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = (await conn.fetchGroupMetadataFromWA(m.chat)).participants.map(u => u.jid)
  for (let user of users) if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '573106442515@s.whatsapp.net' && user !== '18292077732@s.whatsapp.net' && user!== '573223408682@s.whatsapp.net') await conn.groupRemove(m.chat, [user])
}
handler.help = ['kickall']
handler.tags = []
handler.command = /^(kickall)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
module.exports = handler
