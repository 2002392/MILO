let handler = async (m, { conn }) => {
    let txt = ''
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `${await conn.getName(jid)}\nšŖŖ${jid} [${chat?.metadata?.read_only ? 'Left' : 'Joined'}]\n\n`
    m.reply(`š¹ššš¦š§š šš šš„šØš£š¢š¦:
${txt}
`.trim())
}
handler.help = ['É¢Źį“į“į“ź±', 'É¢Źį“į“į“ŹÉŖź±į“']
handler.tags = ['owner menu']
handler.command = /^(group(s|list))$/i
handler.owner = true

export default handler
