//NO MODIFIQUES EL NÚMERO DEL CREADOR NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS <3 
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT
//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
//LLEVO AL REDEDOR DE 1 AÑO Y MEDIO EN LA ELABORACION DE ESTE BOT, SI TU LO EDITAS EN UNA SEMANA NO ERES TU EL CREADOR, SI LO EDITAS TOTALMENTE A TU MANERA SERIA UTULIZADO MI BOT COMO BASE Y AHI SI LO SERIAS  

let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║═ *𝐓𝐡𝐞 Hanmilo - 𝐁𝐨𝐭*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝗛ola, ${username}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *Creador del Bot: Danerys baez* 
║➤ *Numero del creador:* *wa.me/18292077732 (No Bot)*
║➤ *Numero del Bot oficial:* *wa.me/573106442515*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
══〘 🐈⚡️🐈⚡️🐈⚡️🐈 〙══╮    
⎪ *_ミ💖 ¡Aqui esta los audios! ${username} 💖彡_*
⎪≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
⎪ *MENU DE AUDIOS*
⎪≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
⎪ ✢ Solo escriba la palabra/frase. sin prefijo ⎪ (/ . # etc...) 
⎪≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
⎪➫🔊 _Noche de paz_
⎪➫🔊 _Ezcuchame_
➫🔊 _Free fire_
⎪➫🔊 _Flaco_
➫🔊 _Otaku_
➫🔊 _XD_
➫🔊 _Hola_
➫🔊 _Minecraft_
➫🔊 _autotune_
➫🔊 _droga
_➫🔊 _esto se va a descontrolar_
➫🔊 _troll2
_➫🔊 _ganemos_
➫🔊 _quien te pregunto_
➫🔊 _ta potente_
➫🔊 _vaca cumbia_
⎪➫🔊 _Buenos dias_
⎪➫🔊 _Audio hentai_
⎪➫🔊 _Fiesta del admin_
⎪➫🔊 _Fiesta del admin 2_
⎪➫🔊 _Viernes_
⎪➫🔊 _Me olvidé_
⎪➫🔊 _Baneado_
⎪➫🔊 _Feliz navidad_
⎪➫🔊 _A nadie le importa_
⎪➫🔊 _Sexo_
⎪➫🔊 _Vete a la vrg_
⎪➫🔊 _Ara ara_
⎪➫🔊 _Hola_
⎪➫🔊 _Un pato_
⎪➫🔊 _Nyanpasu_
⎪➫🔊 _Te amo_
⎪➫🔊 _Yamete_
⎪➫🔊 _Te diagnostico con gay_
⎪➫🔊 _Quien es tu sempai botsito 7w7_
⎪➫🔊 _Bañate_
⎪➫🔊 _Vivan los novios_
⎪➫🔊 _Marica quien_
⎪➫🔊 _Es puto_
⎪➫🔊 _La biblia_
⎪➫🔊 _Onichan_
⎪➫🔊 _Bot puto_
⎪➫🔊 _Feliz cumpleaños_
⎪➫🔊 _Pasa pack Bot_
⎪➫🔊 _Atencion grupo_
⎪➫🔊 _Homero chino_
⎪➫🔊 _Oh me vengo_
⎪➫🔊 _Murio el grupo_
⎪➫🔊 _Siuuu_
⎪➫🔊 _Rawr_
⎪➫🔊 _UwU_
⎪➫🔊 _:c_
⎪➫🔊 _a_
⎪➫🔊 _Hey_
⎪➫🔊 _Enojado_
⎪➫🔊 _Enojada_
⎪➫🔊 _Chao_
⎪➫🔊 _Hentai_
⎪➫🔊 _Triste_
⎪➫🔊 _Estoy triste_
⎪➫🔊 _Me pican los cocos_
⎪➫🔊 _Contexto_
⎪➫🔊 _Me voy_
⎪➫🔊 _Tengo los calzones del admin_
⎪➫🔊 _Entrada épica_ 
⎪➫🔊 _Esto va ser épico papus_
⎪➫🔊 _Ingresa épicamente_
⎪➫🔊 _Bv_
⎪➫🔊 _Yoshi_
⎪➫🔊 _No digas eso papu_
⎪➫🔊 _Ma ma masivo_
⎪➫🔊 _Masivo_
⎪➫🔊 _Basado_
⎪➫🔊 _Basada_
⎪➫🔊 _Fino señores_
⎪➫🔊 _Verdad que te engañe_
⎪➫🔊 _Sus_
⎪➫🔊 _Ohayo_
⎪➫🔊 _La voz de hombre_
⎪➫🔊 _Pero esto_
⎪➫🔊 _Bien pensado Woody_
⎪➫🔊 _Jesucristo_
⎪➫🔊 _Wtf_
⎪➫🔊 _Una pregunta_
⎪➫🔊 _Que sucede_
⎪➫🔊 _Hablame_
⎪➫🔊 _Pikachu_
⎪➫🔊 _Niconico_
⎪➫🔊 _Yokese_
⎪➫🔊 _Omaiga_
⎪➫🔊 _Nadie te preguntó_
⎪➫🔊 _Bueno si_
⎪➫🔊 _Usted está detenido_
⎪➫🔊 _No me hables_
⎪➫🔊 _No chu_
⎪➫🔊 _El pepe_
⎪➫🔊 _Pokémon_
⎪➫🔊 _No me hagas usar esto_
⎪➫🔊 _Esto va para ti_
⎪➫🔊 _Abduzcan_
⎪➫🔊 _Joder_
⎪➫🔊 _Hablar primos_
⎪➫🔊 _Mmm_
⎪➫🔊 _Orale_
⎪➫🔊 _Me anda buscando anonymous_
⎪➫🔊 _Blackpink in your area_
⎪➫🔊 _Cambiate a Movistar_
⎪➫🔊 _Momento equisde | Momento XD_
⎪➫🔊 _Todo bien | 🧐_
⎪➫🔊 _Te gusta el Pepino | 🥒_
⎪➫🔊 _El tóxico_
⎪➫🔊 _Moshi moshi_
⎪➫🔊 _Calla Fan de BTS_
⎪➫🔊 _Que tal grupo_
⎪➫🔊 _Muchachos_
⎪➫🔊 _Está Zzzz_
⎪➫🔊 _Goku Pervertido_
⎪➫🔊 _Potaxio | 🥑_
⎪➫🔊 _Nico nico_
⎪➫🔊 _El rap de Fernanfloo_
⎪➫🔊 _Tal vez_
⎪➫🔊 _Corte corte_
⎪➫🔊 _Buenas noches_
⎪➫🔊 _Porque ta tite_
⎪➫🔊 _Eres Fuerte_
⎪➫🔊 _Bueno Master | 🫂_
⎪➫🔊 _No Rompas más | 💔_
⎪➫🔊 _Traiganle una falda_
⎪➫🔊 _Se están riendo de mí_
⎪➫🔊 _Su nivel de pendejo_
⎪➫🔊 _Bienvenido/a | 🥳 | 🤗 | 👋_
⎪➫🔊 _Elmo sabe donde vives_
⎪➫🔊 _tunometecabrasaramambiche_
⎪➫🔊 _Y este quien es_
⎪➫🔊 _Motivación_
⎪➫🔊 _En caso de una investigación_
⎪➫🔊 _Buen día grupo | 🙌_
⎪➫🔊 _Las reglas del grupo_
╰══〘 🤤⚡️😈⚡️😼⚡️❤️ 〙══╯


┗━━━━━━━━━━━━━┛`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu2, '© Danery,Camilo bot - Bot', '𝙼𝙴𝙽𝚄 𝚂𝙸𝙼𝙿𝙻𝙴', `#menusimple`, 'CREADOR DEL BOT', `#owner`, '𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'media/hola', null, m, false, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler
