let util = require('util')
let path = require('path')
let fs = require('fs')

let caption = `
🥵🔥
`.trim()

let handler = async (m, { conn }) => {
let video = fs.readFileSync(`./videos/${pickRandom(['entrada','','','','entrada.mp4','])}.mp4`)

     conn.sendFile(m.chat, video, 'entrada.mp4', caption, m)
}
handler.command = /^Bot|Bot$/i
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
