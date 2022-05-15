let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/esto se va a descontrolar.mp3'
conn.sendFile(m.chat, vn, 'Feliz cumple.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Esto se va a descontrolar|esto se va a descontrolar|estosevaadescontrolar/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
