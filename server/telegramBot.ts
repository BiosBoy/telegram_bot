import TelegramBot from 'node-telegram-bot-api';

import messagesAPI from './messagesAPI';
import startCrons from './startCrone';
import { ENV_CONFIG } from './constants';

require('dotenv').config(ENV_CONFIG);

const token = process.env.TOKEN;
const bot = new TelegramBot(process.env.TOKEN as string, { polling: true });

global.bot = bot;

const startTelegramBot = () => {
  // Set webhook for receiving updates from Telegram
  const webhookUrl = process.env.WEBHOOK_URL;
  bot.setWebHook(`${webhookUrl}/bot${token}`);

  // subscribe on incoming bot messages
  bot.on('message', messagesAPI(bot));

  // initialize cron messenger
  startCrons();

  console.log(`Telegram bot is running!`);

  return bot;
};

export default startTelegramBot;
