let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/quien te pregunto.mp3'
conn.sendFile(m.chat, vn, 'Feliz cumple.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /quien te pregunto|Quien te pregunto|/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
