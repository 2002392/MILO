let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINKS 」*\nTe *vas a la verga con tu spam👋, ${await this.getName(m.sender)} rompiste las reglas serás exterminado....!!*`)
    await m.reply(`*Tienes 3 segundos para eliminar el link y o te vas a tomar por culo ...!!!!*`)
    await m.reply(`*3!!*`)
    await m.reply(`*2!!*`)
    await m.reply(`*1!!*`)
    if (isAdmin) return m.reply('*Te salvaste cagon(a) eres admin, no puedo eliminarte jaja :v*')
    if (!isBotAdmin) return m.reply('*El bot Danery no es admin, no puede exterminar a las personas*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*Lol.. enviaste el enlace de este grupo pero compartelo en otros para tener mas personitas uwu XD:v*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler
