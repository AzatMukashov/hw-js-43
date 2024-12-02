import {promises as fs} from 'fs';
import * as path from 'path';
import {MessageData} from "../types";

const messagesDir = path.join(__dirname, '../messages');
export const writeMessage = async (message: string): Promise<MessageData> => {

};