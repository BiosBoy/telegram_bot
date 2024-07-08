import cron from 'node-cron';

import publishMessage from './publishMessage';
import { CRONE_CONFIG } from './constants';

const startPublishAutoMessageWithTextCrone = () => {
  cron.schedule('0 20 * * *', () => publishMessage(), CRONE_CONFIG);
};

export default startPublishAutoMessageWithTextCrone;
