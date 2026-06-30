const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `🎁 Selamat Datang di BOX GAME BOT!

Silakan pilih menu di bawah ini 👇`,
    {
      reply_markup: {
        keyboard: [
          ['🎮 Mulai Game'],
          ['👤 Akun Saya', '💰 Poin Saya'],
          ['📦 Box Saya', '🎁 Klaim Hadiah'],
          ['❓ Bantuan']
        ],
        resize_keyboard: true
      }
    }
  );
});

bot.on('message', (msg) => {
  if (msg.text === '🎮 Mulai Game') {
    bot.sendMessage(msg.chat.id, '🎲 Game akan segera dimulai!');
  } else if (msg.text === '👤 Akun Saya') {
    bot.sendMessage(msg.chat.id, `👤 Nama: ${msg.from.first_name}`);
  } else if (msg.text === '💰 Poin Saya') {
    bot.sendMessage(msg.chat.id, '💰 Poin Anda: 0');
  } else if (msg.text === '📦 Box Saya') {
    bot.sendMessage(msg.chat.id, '📦 Box Anda masih kosong.');
  } else if (msg.text === '🎁 Klaim Hadiah') {
    bot.sendMessage(msg.chat.id, '🎁 Belum ada hadiah yang bisa diklaim.');
  } else if (msg.text === '❓ Bantuan') {
    bot.sendMessage(msg.chat.id, 'Gunakan tombol menu untuk menjalankan bot.');
  }
});
