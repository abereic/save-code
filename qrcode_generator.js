const {WAConnection, MessageType} = require('@adiwajshing/baileys');
const qrcode = require('qrcode-terminal');

const conn = new WAConnection();

conn.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

conn.on('open', () => {
    console.log('Connection opened');
});

conn.on('message', async (message) => {
    if (message.type === MessageType.text && message.body === 'ping') {
        const reply = `pong (${conn.user.name})`;
        await conn.sendMessage(message.chatId, reply, MessageType.text);
    }
});

conn.connect().then(() => {
    console.log('Connected');
}).catch((error) => {
    console.error(error);
});

conn.on('ws-close', ({reason}) => {
    if (reason === 'invalid_session') {
        console.log('Session expired, reconnecting...');
        conn.loadAuthInfo('./auth_info.json').then(() => {
            return conn.connect();
        }).catch((error) => {
            console.error(error);
        });
    }
});

conn.multiDevice.setActive(true);
