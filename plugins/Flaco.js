let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/flaco.mp3'
conn.sendFile(m.chat, vn, 'Feliz cumple.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /flaco|Flaco|Callate/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
