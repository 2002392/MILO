let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Shit.mp3'
conn.sendFile(m.chat, vn, 'Feliz cumple.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /shit|Shit|fokiun/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
