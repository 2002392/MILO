let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/esto se va a descontrolar2.mp3'
conn.sendFile(m.chat, vn, 'Feliz cumple.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /esto se va a descontrolar2|Esto se va a descontrolar2|esto se va a descontrolar 2/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
