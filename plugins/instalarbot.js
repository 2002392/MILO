let handler = async m => m.reply(`
*

💥 𝐑𝐄𝐐𝐔𝐈𝐒𝐈𝐓𝐎𝐒 𝐏𝐀𝐑𝐀 𝐋𝐀 𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐂𝐈𝐎𝐍 💥
➤ Termux  
➤ 1 GB de memoria en el teléfono
➤ Aconsejable un WhatsApp secundario
➤ Aconsejable un numero secundario
➤ 2 teléfonos o un 1 teléfono y una PC (es temporal - solo para escanear un código QR)

💥 𝐀𝐑𝐄𝐀 𝐃𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 💥
➤ Termux: https://f-droid.org/en/packages/com.termux/
➤ WhatsApp recomendado: https://www.mediafire.com/file/gers3gbbubpshji/%C3%8A%C2%99%C3%A1%C2%B4%C2%9Cs%C3%8D%C2%A8%C3%89%C2%AA%C3%8D%C2%A7%C3%89%C2%B4%C3%A1%C2%B7%C2%A8%C3%A1%C2%B4%C2%87%C3%8D%C2%A3s%C3%A1%C2%B7%C2%A1s%C3%8D%C2%A6+%C3%A2%C2%A9
   
💥 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐂𝐈𝐎𝐍 𝐕𝐈𝐀 𝐆𝐈𝐓𝐇𝐔𝐁 💥
➤ pkg install ffmpeg
➤ pkg install imagemagick
➤ apt update
➤ apt upgrade
➤ pkg install wget
➤ pkg install git 
➤ pkg install nodejs
➤ pkg install npm
➤ git clone https://github.com/danerybaez27/FNBot
➤ cd FNBot
➤ npm start 

° Escaneas el código QR, tienes 30 segundos para hacerlo

💥 INFO EXTRA 💥
- Puede ocasionar que el numero se vaya a soporte 
➤ Numero de ayuda durante la instalacion: wa.me/18292077732  (No Bot, solo ayuda durante la instalación)

Danery hanma 
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler
