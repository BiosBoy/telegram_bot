import OpenAI from 'openai';
import { ENV_CONFIG, ERROR_MESSAGE, PROMPT_CONFIG } from './constants';

require('dotenv').config(ENV_CONFIG);

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY
});

const generateMessage = async (prompt: string) => {
  try {
    const response = await openai.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      prompt: prompt,
      ...PROMPT_CONFIG
    });

    return response.choices[0].text;
  } catch (error) {
    console.error('generateText Error:', error.response ? error.response.data : error.message);

    return ERROR_MESSAGE;
  }
};

export default generateMessage;
