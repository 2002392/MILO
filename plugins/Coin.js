// NO QUITES NI CAMBIES NADA DE AQUI POR FAVOR
// AGREGA TUS DATOS SI QIERES, PERO NO QUITES LOS MIOS
let handler = async m => m.reply(`
*┏ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┇       「Gana dinero caminado」*
*┣ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┃ ❖ Link 
*┃ 👉🏻 https://sweatco.in/i/danery27
*┃ para que puedas ganar dinero y apoyar al bot <3
*┃ -   CONCEPTO: APOYO Y GANANCIAS  
*┗ ┅ ━━━━━━━━━━━━━ ┅ ━*
`.trim()) 
//PUEDES AGREGAR TUS DATOS, PERO NO QUITES LOS QUE YA ESTÁN PUESTOS
handler.help = ['donar']
handler.tags = ['info']
handler.command = /^(coin|ganardinero)$/i

module.exports = handler
