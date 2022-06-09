function handler(m) {
  
  this.sendContact(m.chat, '573223408682', 'CAMILO EG', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i

module.exports = handler
