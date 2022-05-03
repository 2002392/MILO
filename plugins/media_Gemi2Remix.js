let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/media_Gemi2Remix.mp3'
conn.sendFile(m.chat, vn, 'media_Gemi2Remix.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /ª|Canta bot|canta bot/
handler.command = /^(Gime?$)/

module.exports = handler
