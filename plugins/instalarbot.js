let handler = async m => m.reply(`
*

π₯ ππππππππππ ππππ ππ πππππππππππ π₯
β€ Termux  
β€ 1 GB de memoria en el telΓ©fono
β€ Aconsejable un WhatsApp secundario
β€ Aconsejable un numero secundario
β€ 2 telΓ©fonos o un 1 telΓ©fono y una PC (es temporal - solo para escanear un cΓ³digo QR)

π₯ ππππ ππ πππππππππ π₯
β€ Termux: https://f-droid.org/en/packages/com.termux/
β€ WhatsApp recomendado: https://www.mediafire.com/file/gers3gbbubpshji/%C3%8A%C2%99%C3%A1%C2%B4%C2%9Cs%C3%8D%C2%A8%C3%89%C2%AA%C3%8D%C2%A7%C3%89%C2%B4%C3%A1%C2%B7%C2%A8%C3%A1%C2%B4%C2%87%C3%8D%C2%A3s%C3%A1%C2%B7%C2%A1s%C3%8D%C2%A6+%C3%A2%C2%A9
   
π₯ ππππππππ ππ πππππππππππ πππ ππππππ π₯
β€ pkg install ffmpeg
β€ pkg install imagemagick
β€ apt update
β€ apt upgrade
β€ pkg install wget
β€ pkg install git 
β€ pkg install nodejs
β€ pkg install npm
β€ git clone https://github.com/danerybaez27/FNBot
β€ cd FNBot
β€ npm start 

Β° Escaneas el cΓ³digo QR, tienes 30 segundos para hacerlo

π₯ INFO EXTRA π₯
- Puede ocasionar que el numero se vaya a soporte 
β€ Numero de ayuda durante la instalacion: wa.me/18292077732  (No Bot, solo ayuda durante la instalaciΓ³n)

Danery hanma 
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler
