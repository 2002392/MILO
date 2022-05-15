let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/free fire.mp3'
conn.sendFile(m.chat, vn, 'Feliz cumple.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /free fire|Free fire|frifair/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
