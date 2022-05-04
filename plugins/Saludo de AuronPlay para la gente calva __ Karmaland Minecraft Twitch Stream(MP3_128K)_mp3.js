let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Saludo de AuronPlay para la gente calva __ Karmaland Minecraft Twitch Stream(MP3_128K).mp3'
conn.sendFile(m.chat, vn, 'Saludo de AuronPlay para la gente calva __ Karmaland Minecraft Twitch Stream(MP3_128K).mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /calvo|Calvo|Calva|
handler.command = new RegExp
module.exports = handler
