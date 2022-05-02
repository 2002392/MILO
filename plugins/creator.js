function handler(m) {
  
  this.sendContact(m.chat, '18292077732', 'Danery Hanma BOT', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i

module.exports = handler
