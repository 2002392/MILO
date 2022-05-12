let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Escuchame.mp3'
conn.sendFile(m.chat, vn, 'Feliz cuple.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Escuchame|Pedazo de mierda|remil/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
