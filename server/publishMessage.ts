import chatGPT from './generateMessage';
import { TELEGRAM_MSG_CONFIG, ENV_CONFIG, INTERESTING_FACT_HEAD, POST_SNIPPET } from './constants';

require('dotenv').config(ENV_CONFIG);

const channelID = process.env.CHANNEL_ID;
const message = (text: string) => `*${INTERESTING_FACT_HEAD}*\n${text}\n\n${POST_SNIPPET}`;

const publishMessage = async () => {
  const { text } = await chatGPT();

  if (!text) {
    return;
  }

  global.bot.sendMessage(channelID, message(text), TELEGRAM_MSG_CONFIG);
};

export default publishMessage;
