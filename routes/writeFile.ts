import {promises as fs} from 'fs';
import * as path from 'path';
import {MessageData} from "../types";

const messagesDir = path.join(__dirname, '../messages');
export const writeMessage = async (message: string): Promise<MessageData> => {
const dateTime = new Date().toISOString();
const fileName = path.join(messagesDir, `${dateTime.replace(/:/g, '-')}.txt`);
const data: MessageData = {message, datetime: dateTime};

};