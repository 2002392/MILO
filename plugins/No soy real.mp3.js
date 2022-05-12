let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/No soy real.mp3'
conn.sendFile(m.chat, vn, 'Feliz cumple.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /te amo|Te amo|Bot te amo/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
