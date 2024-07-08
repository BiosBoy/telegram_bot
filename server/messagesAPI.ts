import TelegramBot from 'node-telegram-bot-api';
import { ENV_CONFIG } from './constants';
import { WELCOME_MESSAGE } from './constants';
import getFileId from './helpers/getFileId';
import mediaUploadAPI from './services/mediaUpload';
import { IMessage } from './interfaces';
import adminChat from './api/messaging/admin';
import clientChat from './api/messaging/client';

require('dotenv').config(ENV_CONFIG);

const messagesAPI = (bot: TelegramBot) => async (msg: IMessage) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  const { fileId, isPhoto, isVideo, isFile } = getFileId(msg);
  const isAdminChat = String(chatId) === String(process.env.ADMIN_CHAT_ID);

  // TODO: create better welcome message
  if (messageText === '/start') {
    bot.sendMessage(chatId, WELCOME_MESSAGE);

    return;
  }

  // in case we been sent a file
  if (fileId) {
    await mediaUploadAPI(msg);

    isPhoto && bot.sendPhoto(process.env.ADMIN_CHAT_ID, fileId);
    isFile && bot.sendDocument(process.env.ADMIN_CHAT_ID, fileId);
    isVideo && bot.sendVideo(process.env.ADMIN_CHAT_ID, fileId);
  }

  if (isAdminChat) {
    adminChat(msg);
  } else {
    clientChat(msg);
  }
};

export default messagesAPI;
